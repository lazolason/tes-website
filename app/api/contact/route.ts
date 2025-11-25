import { NextRequest, NextResponse } from "next/server";

// Contact form API route
// For production, integrate with Resend, SendGrid, or similar email service
// For now, this validates and logs the submission

interface ContactFormData {
  name: string;
  email: string;
  organisation?: string;
  interest?: string;
  description?: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validation
    const errors: string[] = [];

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

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Log the submission (in production, send email here)
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Organisation:", data.organisation || "Not provided");
    console.log("Interest:", data.interest || "Not selected");
    console.log("Description:", data.description || "Not provided");
    console.log("Timestamp:", new Date().toISOString());
    console.log("===================================");

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
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, errors: ["Something went wrong. Please try again."] },
      { status: 500 }
    );
  }
}
