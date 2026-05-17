# Afrihost Contact Deployment Notes

Generated: 2026-03-13
Project: `tes-website`

## Purpose

The production contact form now submits to `public/contact.php`, which is compatible with Afrihost static hosting plus PHP. Mail is sent to `info@mexelenergysustain.com`, and Afrihost forwarding can then relay that mailbox to the final destination if needed.

## Required Afrihost Setup

1. Log into ClientZone and open the domain's Website Manager.
2. Confirm the site is running on cPanel or CWP and that PHP is enabled for the domain.
3. If needed, update the domain PHP version in MultiPHP Manager.
4. Create or confirm the mailbox or forwarder for `info@mexelenergysustain.com`.
5. If the final destination is another inbox, add a cPanel forwarder from `info@mexelenergysustain.com` to that inbox.
6. Configure SPF and DKIM for the domain so mail sent by `contact.php` is less likely to land in spam.
7. Deploy the exported `out/` contents, including `out/contact.php`, to Afrihost.
8. Submit a live test enquiry after deployment and confirm:
   - the success state returns on `/contact/`
   - the destination inbox receives the message
   - the `Reply-To` header points to the submitter email

## Files To Review If The Destination Changes

- `public/contact.php`
- `app/contact/page.tsx`

## Current Mail Settings In Code

- Recipient: `info@mexelenergysustain.com`
- From: `info@mexelenergysustain.com`
- Reply-To: submitter email address

## Source Links

- Afrihost: How to create an email forwarder in cPanel
  https://help.afrihost.com/entry/how-to-create-an-email-forwarder-in-cpanel/
- Afrihost: How to update your domain PHP version
  https://help.afrihost.com/entry/how-to-update-your-domain-php-version/
- Afrihost: How to create an SPF record for your domain
  https://help.afrihost.com/entry/how-to-create-an-spf-record-for-your-domain/
- Afrihost: How to create a DKIM record for your domain in cPanel
  https://help.afrihost.com/entry/how-to-create-a-dkim-record-for-your-domain-in-cpanel/
