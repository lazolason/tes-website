<?php
declare(strict_types=1);

// Use Afrihost-hosted mailboxes here. Afrihost recommends a dedicated website
// sender mailbox for contact-form traffic if you want to separate replies.
$recipientEmail = 'info@mexelenergysustain.com';
$fromEmail = 'info@mexelenergysustain.com';
$successMessage = 'Thank you for your enquiry. We will respond within 1-2 business days.';

function isAjaxRequest(): bool
{
    $requestedWith = $_SERVER['HTTP_X_REQUESTED_WITH'] ?? '';
    return strtolower($requestedWith) === 'xmlhttprequest';
}

function wantsJsonResponse(): bool
{
    if (isAjaxRequest()) {
        return true;
    }

    $accept = strtolower((string) ($_SERVER['HTTP_ACCEPT'] ?? ''));
    if (strpos($accept, 'application/json') !== false) {
        return true;
    }

    $contentType = strtolower((string) ($_SERVER['CONTENT_TYPE'] ?? ''));
    return strpos($contentType, 'application/json') !== false;
}

function respondJson(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=UTF-8');
    header('Cache-Control: no-store');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function respondHtml(int $statusCode, string $title, string $message): void
{
    http_response_code($statusCode);
    header('Content-Type: text/html; charset=UTF-8');
    $safeTitle = htmlspecialchars($title, ENT_QUOTES, 'UTF-8');
    $safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

    echo <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{$safeTitle}</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; color: #0f172a; margin: 0; }
    main { max-width: 40rem; margin: 5rem auto; padding: 2rem; background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08); }
    h1 { margin-top: 0; font-size: 1.75rem; }
    p { line-height: 1.6; }
    a { color: #047857; font-weight: 600; }
  </style>
</head>
<body>
  <main>
    <h1>{$safeTitle}</h1>
    <p>{$safeMessage}</p>
    <p><a href="/contact/">Back to contact page</a></p>
  </main>
</body>
</html>
HTML;
    exit;
}

function respond(int $statusCode, array $payload, string $title, string $message): void
{
    if (wantsJsonResponse()) {
        respondJson($statusCode, $payload);
    }

    respondHtml($statusCode, $title, $message);
}

function validateEmail(string $email): bool
{
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function cleanHeaderValue(string $value): string
{
    return trim(str_replace(["\r", "\n"], '', $value));
}

function normaliseField(array $data, string $key): string
{
    $value = $data[$key] ?? '';
    if (!is_string($value)) {
        return '';
    }

    return trim($value);
}

function getRecaptchaSecret(): string
{
    $envSecret = trim((string) getenv('MEXEL_RECAPTCHA_SECRET'));
    if ($envSecret !== '') {
        return $envSecret;
    }

    $configPath = dirname(__DIR__, 3) . DIRECTORY_SEPARATOR . 'contact-form-config.php';
    if (!is_file($configPath)) {
        return '';
    }

    $config = require $configPath;
    if (!is_array($config)) {
        return '';
    }

    $secret = $config['recaptcha_secret'] ?? '';
    return is_string($secret) ? trim($secret) : '';
}

function stringLength(string $value): int
{
    if (function_exists('mb_strlen')) {
        return mb_strlen($value);
    }

    return strlen($value);
}

function getTruthyField(array $data, string $key): bool
{
    $value = strtolower(normaliseField($data, $key));
    return in_array($value, ['1', 'true', 'yes', 'on'], true);
}

function getClientIp(): string
{
    $forwardedFor = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
    if ($forwardedFor !== '') {
        $parts = explode(',', $forwardedFor);
        $candidate = trim((string) ($parts[0] ?? ''));
        if ($candidate !== '') {
            return $candidate;
        }
    }

    return trim((string) ($_SERVER['REMOTE_ADDR'] ?? ''));
}

function withinRateLimit(int $maxAttempts, int $windowSeconds): bool
{
    $clientIp = getClientIp();
    if ($clientIp === '') {
        return true;
    }

    $rateLimitFile = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR)
        . DIRECTORY_SEPARATOR
        . 'mexel-contact-rate-limit-'
        . hash('sha256', $clientIp)
        . '.json';

    $now = time();
    $windowStart = $now - $windowSeconds;
    $attempts = [];

    if (is_file($rateLimitFile)) {
        $stored = json_decode((string) @file_get_contents($rateLimitFile), true);
        if (is_array($stored)) {
            foreach ($stored as $attempt) {
                $attemptTime = (int) $attempt;
                if ($attemptTime >= $windowStart) {
                    $attempts[] = $attemptTime;
                }
            }
        }
    }

    if (count($attempts) >= $maxAttempts) {
        return false;
    }

    $attempts[] = $now;
    @file_put_contents($rateLimitFile, json_encode($attempts), LOCK_EX);

    return true;
}

function verifyRecaptchaToken(string $secret, string $responseToken, string $clientIp): array
{
    $payload = http_build_query([
        'secret' => $secret,
        'response' => $responseToken,
        'remoteip' => $clientIp,
    ]);

    $rawResponse = false;

    if (function_exists('curl_init')) {
        $ch = curl_init('https://www.google.com/recaptcha/api/siteverify');
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $payload,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
        ]);
        $rawResponse = curl_exec($ch);
        curl_close($ch);
    } else {
        $context = stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
                'content' => $payload,
                'timeout' => 10,
            ],
        ]);
        $rawResponse = @file_get_contents(
            'https://www.google.com/recaptcha/api/siteverify',
            false,
            $context
        );
    }

    if (!is_string($rawResponse) || $rawResponse === '') {
        return [
            'ok' => false,
            'status' => 502,
            'message' => 'Security verification is temporarily unavailable. Please try again or email info@mexelenergysustain.com directly.',
        ];
    }

    $decoded = json_decode($rawResponse, true);
    if (!is_array($decoded)) {
        return [
            'ok' => false,
            'status' => 502,
            'message' => 'Security verification is temporarily unavailable. Please try again or email info@mexelenergysustain.com directly.',
        ];
    }

    if (!($decoded['success'] ?? false)) {
        return [
            'ok' => false,
            'status' => 400,
            'message' => 'Please complete the security check and try again.',
        ];
    }

    return [
        'ok' => true,
        'status' => 200,
        'message' => '',
    ];
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    respond(
        405,
        ['success' => false, 'errors' => ['Method not allowed.']],
        'Method Not Allowed',
        'This endpoint only accepts POST requests.'
    );
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$data = [];

if (stripos($contentType, 'application/json') !== false) {
    $rawInput = file_get_contents('php://input');
    $decoded = json_decode($rawInput ?: '', true);
    if (is_array($decoded)) {
        $data = $decoded;
    }
} else {
    $data = $_POST;
}

$name = normaliseField($data, 'name');
$email = normaliseField($data, 'email');
$organisation = normaliseField($data, 'organisation');
$interest = normaliseField($data, 'interest');
$topic = normaliseField($data, 'topic');
$description = normaliseField($data, 'description');
$website = normaliseField($data, 'website');
$recaptchaRequired = getTruthyField($data, 'recaptcha_required') || getTruthyField($data, 'recaptchaRequired');
$recaptchaResponse = normaliseField($data, 'g-recaptcha-response');

if ($recaptchaResponse === '') {
    $recaptchaResponse = normaliseField($data, 'recaptchaResponse');
}

if ($website !== '') {
    respond(
        200,
        ['success' => true, 'message' => $successMessage],
        'Message Received',
        $successMessage
    );
}

$errors = [];

if ($name === '' || stringLength($name) < 2) {
    $errors[] = 'Name is required (at least 2 characters).';
}

if ($email === '' || !validateEmail($email)) {
    $errors[] = 'Valid email address is required.';
}

if (stringLength($name) > 100) {
    $errors[] = 'Name must be less than 100 characters.';
}

if ($organisation !== '' && stringLength($organisation) > 200) {
    $errors[] = 'Organisation must be less than 200 characters.';
}

if ($description !== '' && stringLength($description) > 2000) {
    $errors[] = 'Description must be less than 2000 characters.';
}

if ($topic !== '' && stringLength($topic) > 200) {
    $errors[] = 'Topic must be less than 200 characters.';
}

if ($recaptchaRequired && $recaptchaResponse === '') {
    $errors[] = 'Please complete the security check.';
}

if ($errors !== []) {
    respond(
        400,
        ['success' => false, 'errors' => $errors],
        'Message Not Sent',
        $errors[0]
    );
}

if (!withinRateLimit(5, 900)) {
    respond(
        429,
        ['success' => false, 'errors' => ['Too many enquiries were submitted from this connection. Please wait a few minutes and try again.']],
        'Too Many Requests',
        'Too many enquiries were submitted from this connection. Please wait a few minutes and try again.'
    );
}

if ($recaptchaRequired) {
    $recaptchaSecret = getRecaptchaSecret();
    if ($recaptchaSecret === '') {
        respond(
            500,
            ['success' => false, 'errors' => ['Security verification is not configured. Please email info@mexelenergysustain.com directly.']],
            'Security Verification Unavailable',
            'Security verification is not configured. Please email info@mexelenergysustain.com directly.'
        );
    }

    $verification = verifyRecaptchaToken($recaptchaSecret, $recaptchaResponse, getClientIp());
    if (!($verification['ok'] ?? false)) {
        $verificationStatus = isset($verification['status']) ? (int) $verification['status'] : 400;
        $verificationMessage = (string) ($verification['message'] ?? 'Please complete the security check and try again.');

        respond(
            $verificationStatus,
            ['success' => false, 'errors' => [$verificationMessage]],
            'Security Verification Failed',
            $verificationMessage
        );
    }
}

$safeName = cleanHeaderValue($name);
$safeEmail = cleanHeaderValue($email);
$safeOrganisation = $organisation !== '' ? $organisation : 'Not provided';
$safeTopic = $topic !== '' ? $topic : 'Not specified';
$safeInterest = $interest !== '' ? $interest : ($topic !== '' ? $topic : 'General enquiry');
$safeDescription = $description !== '' ? $description : 'Not provided';

$subject = cleanHeaderValue('Website enquiry: ' . $safeInterest);
$bodyLines = [
    'New website enquiry received.',
    '',
    'Name: ' . $safeName,
    'Email: ' . $safeEmail,
    'Organisation / Site: ' . $safeOrganisation,
    'Requested topic: ' . $safeTopic,
    'Area of interest: ' . $safeInterest,
    '',
    'Brief description:',
    $safeDescription,
];

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Mexel Energy Sustain Website <' . cleanHeaderValue($fromEmail) . '>',
    'Reply-To: ' . $safeEmail,
    'X-Mailer: PHP/' . phpversion(),
];

$mailSent = mail(
    $recipientEmail,
    $subject,
    implode("\r\n", $bodyLines),
    implode("\r\n", $headers)
);

if (!$mailSent) {
    respond(
        500,
        ['success' => false, 'errors' => ['The server could not send your message. Please email info@mexelenergysustain.com directly.']],
        'Message Not Sent',
        'The server could not send your message. Please email info@mexelenergysustain.com directly.'
    );
}

respond(
    200,
    ['success' => true, 'message' => $successMessage],
    'Message Sent',
    $successMessage
);
