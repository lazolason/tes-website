"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import SystemHeader from "../../components/SystemHeader";
import { trackContactFormError, trackContactFormSuccess } from "@/lib/analytics";

// Note: Metadata export must be in a separate server component file
// See app/contact/layout.tsx for page metadata

interface FormErrors {
  name?: string;
  email?: string;
  general?: string;
  recaptcha?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const FORM_POST_ACTION = "/contact.php";
const CONTACT_ENDPOINT =
  process.env.NODE_ENV === "development" ? "/api/contact" : FORM_POST_ACTION;
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() ?? "";

function resetRecaptchaWidget(): void {
  if (typeof window === "undefined") {
    return;
  }

  const maybeWindow = window as Window & {
    grecaptcha?: {
      reset?: () => void;
    };
  };

  maybeWindow.grecaptcha?.reset?.();
}

export default function ContactPage() {
  const [topic, setTopic] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    interest: "",
    description: "",
    topic: "",
    website: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    const nextTopic = new URLSearchParams(window.location.search).get("topic")?.trim() ?? "";
    setTopic(nextTopic);

    setFormData((prev) => {
      if (prev.topic === nextTopic) {
        return prev;
      }

      return {
        ...prev,
        topic: nextTopic,
      };
    });
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const browserFormData = new FormData(e.currentTarget);
    const recaptchaField = browserFormData.get("g-recaptcha-response");
    const recaptchaResponse =
      typeof recaptchaField === "string" ? recaptchaField.trim() : "";

    if (RECAPTCHA_SITE_KEY && !recaptchaResponse) {
      setErrors({ recaptcha: "Please complete the security check." });
      return;
    }

    setStatus("submitting");
    setErrors({});
    const submissionTopic = formData.topic || topic || formData.interest || "Unspecified";
    const payload = {
      ...formData,
      recaptcha_required: RECAPTCHA_SITE_KEY ? "1" : "",
      recaptchaResponse,
    };

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({
        success: false,
        errors: ["The contact service returned an unexpected response."],
      }));

      if (response.ok && result.success) {
        trackContactFormSuccess(submissionTopic);
        setStatus("success");
        resetRecaptchaWidget();
        setFormData({
          name: "",
          email: "",
          organisation: "",
          interest: "",
          description: "",
          topic,
          website: "",
        });
      } else {
        trackContactFormError(
          submissionTopic,
          response.ok ? "application_error" : `http_${response.status}`
        );
        resetRecaptchaWidget();
        setStatus("error");
        setErrors({ general: result.errors?.[0] || "Something went wrong" });
      }
    } catch {
      trackContactFormError(submissionTopic, "network_error");
      resetRecaptchaWidget();
      setStatus("error");
      setErrors({ general: "Failed to send. Please try emailing us directly." });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  return (
    <main className="min-h-screen bg-white">
      {RECAPTCHA_SITE_KEY && (
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="afterInteractive"
        />
      )}
      <SystemHeader
        tag="ENGINEERING ENQUIRY"
        title="Start an Engineering Enquiry."
        description="We scope requests against condenser indicators (TR, TTD, vacuum) and a baseline → review method to confirm fit."
        continuity="Start a technical conversation aligned to measured outcomes."
        currentLabel="Contact"
        activeSteps={[3]}
      />

      {/* Contact details + form */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Enquiry form */}
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              {status === "success" ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <svg
                      className="h-6 w-6 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    Message sent successfully
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Thank you for your enquiry. We typically respond within 1-2
                    business days.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-emerald-700 hover:text-emerald-900"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Send a message
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Please fill in the details below and we will get back to you as soon as possible.
                  </p>

                  {formData.topic && (
                    <div className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 p-3">
                      <p className="text-sm text-emerald-900">
                        This enquiry is preloaded for{" "}
                        <span className="font-semibold">{formData.topic}</span>.
                        You can adjust the details below before sending.
                      </p>
                    </div>
                  )}

                  {errors.general && (
                    <div className="mt-4 rounded-md bg-red-50 p-3">
                      <p className="text-sm text-red-700">{errors.general}</p>
                    </div>
                  )}

                  <form
                    className="mt-5 space-y-4"
                    action={FORM_POST_ACTION}
                    method="post"
                    acceptCharset="UTF-8"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="topic" value={formData.topic} readOnly />
                    <input
                      type="hidden"
                      name="recaptcha_required"
                      value={RECAPTCHA_SITE_KEY ? "1" : ""}
                      readOnly
                    />
                    <div>
                      <label className="sr-only" htmlFor="website">
                        Website
                      </label>
                      <input
                        id="website"
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-800">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`mt-1 w-full rounded-md border px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 ${errors.name
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-slate-300 focus:border-emerald-600 focus:ring-emerald-600"
                          }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="organisation" className="block text-xs font-semibold text-slate-800">
                        Organisation / Site
                      </label>
                      <input
                        id="organisation"
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                        placeholder="e.g. Eskom Power Station, mine, refinery, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-800">
                        Your email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 w-full rounded-md border px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-1 ${errors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-slate-300 focus:border-emerald-600 focus:ring-emerald-600"
                          }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-xs font-semibold text-slate-800">
                        Area of interest
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                      >
                        <option value="">Select one…</option>
                        <option value="TES for Eskom wet-cooled power stations">
                          TES for Eskom wet-cooled power stations
                        </option>
                        <option value="TES for industrial cooling-water systems">
                          TES for industrial cooling-water systems
                        </option>
                        <option value="TES for cooling-water">
                          TES for cooling-water
                        </option>
                        <option value="TES for boiler / steam-side">
                          TES for boiler / steam-side
                        </option>
                        <option value="Other / not sure yet">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-xs font-semibold text-slate-800">
                        Brief description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                        rows={4}
                        placeholder="Please provide a brief description of your operational context and what you would like to explore."
                      />
                    </div>

                    {RECAPTCHA_SITE_KEY && (
                      <div>
                        <div
                          className="g-recaptcha"
                          data-sitekey={RECAPTCHA_SITE_KEY}
                        />
                        {errors.recaptcha && (
                          <p className="mt-1 text-xs text-red-600">{errors.recaptcha}</p>
                        )}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                          Send message
                        </>
                      )}
                    </button>
                  </form>


                </>
              )}
            </div>
            {/* Direct contact */}
            <div className="space-y-4 order-first">
              <h2 className="text-lg font-semibold text-slate-900">
                Contact information
              </h2>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
                <p className="font-semibold text-slate-900">Mexel Energy Sustain (Pty) Ltd</p>

                {/* MOBILE */}
                <p className="mt-3">
                  <span className="font-semibold">Mobile:</span>{" "}
                  <a
                    href="tel:+27794648298"
                    className="text-emerald-700 hover:text-emerald-900"
                  >
                    +27 79 464 8298
                  </a>
                </p>

                {/* WHATSAPP */}
                <p className="mt-2">
                  <span className="font-semibold text-emerald-600">WhatsApp:</span>{" "}
                  <a
                    href="https://wa.me/27794648298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:text-emerald-900 hover:underline"
                  >
                    Chat Directly
                  </a>
                </p>

                {/* GENERAL ENQUIRIES */}
                <p className="mt-4 border-t border-slate-200 pt-2">
                  <span className="font-semibold">General enquiries:</span>{" "}
                  <a
                    href="mailto:info@mexelenergysustain.com"
                    className="text-emerald-700 hover:text-emerald-900 underline"
                  >
                    info@mexelenergysustain.com
                  </a>
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Production form submissions are routed through the Afrihost mail server
                  configured for this domain; direct email remains available if delivery
                  confirmation is required.
                </p>
              </div>
            </div>
          </div>



        </div>
      </section>
    </main>
  );
}
