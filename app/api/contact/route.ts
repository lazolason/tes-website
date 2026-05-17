import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";

// Contact form API route
// Used for local development only.
// Production on Afrihost static hosting submits to /forms/contact.php instead.

interface ContactFormData {
  name: string;
  email: string;
  organisation?: string;
  interest?: string;
  description?: string;
  topic?: string;
  website?: string;
  recaptchaRequired?: string;
  recaptcha_required?: string;
  recaptchaResponse?: string;
  "g-recaptcha-response"?: string;
}

function getStringValue(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getRecaptchaResponse(data: ContactFormData): string {
  return (
    data.recaptchaResponse?.trim() ||
    data["g-recaptcha-response"]?.trim() ||
    ""
  );
}

function requiresRecaptcha(data: ContactFormData): boolean {
  return data.recaptchaRequired === "1" || data.recaptcha_required === "1";
}

async function verifyRecaptcha(token: string, remoteIp: string | null) {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();
  if (!secret) {
    return {
      ok: false,
      status: 500,
      message:
        "Security verification is not configured. Please email info@mexelenergysustain.com directly.",
    };
  }

  const params = new URLSearchParams({
    secret,
    response: token,
  });

  if (remoteIp) {
    params.set("remoteip", remoteIp);
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
    cache: "no-store",
  });

  if (!response.ok) {
    logger.error("reCAPTCHA verification request failed", {
      status: response.status,
    });

    return {
      ok: false,
      status: 502,
      message:
        "Security verification is temporarily unavailable. Please try again or email info@mexelenergysustain.com directly.",
    };
  }

  const result = await response.json();
  if (!result?.success) {
    logger.info("reCAPTCHA verification rejected submission", {
      errorCodes: Array.isArray(result?.["error-codes"])
        ? result["error-codes"]
        : [],
    });

    return {
      ok: false,
      status: 400,
      message: "Please complete the security check and try again.",
    };
  }

  return { ok: true, status: 200, message: "" };
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let data: ContactFormData;

    if (contentType.includes("application/json")) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      data = {
        name: getStringValue(formData.get("name")),
        email: getStringValue(formData.get("email")),
        organisation: getStringValue(formData.get("organisation")),
        interest: getStringValue(formData.get("interest")),
        description: getStringValue(formData.get("description")),
        topic: getStringValue(formData.get("topic")),
        website: getStringValue(formData.get("website")),
        recaptchaRequired: getStringValue(formData.get("recaptcha_required")),
        recaptchaResponse: getStringValue(formData.get("g-recaptcha-response")),
      };
    }

    if (data.website) {
      return NextResponse.json({
        success: true,
        message: "Thank you for your enquiry. We will respond within 1-2 business days.",
      });
    }

    // Validation
    const errors: string[] = [];
    const recaptchaResponse = getRecaptchaResponse(data);

    if (!data.name || data.name.trim().length < 2) {
      errors.push("Name is required (at least 2 characters)");
    }

    if (!data.email || !validateEmail(data.email)) {
      errors.push("Valid email address is required");
    }

    if (data.name && data.name.length > 100) {
      errors.push("Name must be less than 100 characters");
    }

    if (data.organisation && data.organisation.length > 200) {
      errors.push("Organisation must be less than 200 characters");
    }

    if (data.description && data.description.length > 2000) {
      errors.push("Description must be less than 2000 characters");
    }

    if (data.topic && data.topic.length > 200) {
      errors.push("Topic must be less than 200 characters");
    }

    if (requiresRecaptcha(data) && !recaptchaResponse) {
      errors.push("Please complete the security check");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    if (requiresRecaptcha(data)) {
      const remoteIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
      const verification = await verifyRecaptcha(recaptchaResponse, remoteIp);
      if (!verification.ok) {
        return NextResponse.json(
          { success: false, errors: [verification.message] },
          { status: verification.status }
        );
      }
    }

    // Log the submission
    logger.info('Contact form submission received', {
      email: data.email,
      topic: data.topic || 'General',
      interest: data.interest || 'General',
      hasOrganisation: !!data.organisation,
      hasDescription: !!data.description,
    });

    // TODO: Integrate with email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'TES Website <noreply@mexelenergysustain.com>',
    //   to: 'lazola@mexelenergysustain.com',
    //   subject: `TES Enquiry: ${data.interest || 'General'}`,
    //   html: `<p><strong>Name:</strong> ${data.name}</p>...`
    // });

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry. We will respond within 1-2 business days.",
    });
  } catch (error) {
    logger.error("Contact form submission failed", error);
    return NextResponse.json(
      { success: false, errors: ["Something went wrong. Please try again."] },
      { status: 500 }
    );
  }
}
