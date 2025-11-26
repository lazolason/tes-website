"use client";

import { useState } from "react";
import Link from "next/link";

interface FormErrors {
  name?: string;
  email?: string;
  general?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    interest: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          organisation: "",
          interest: "",
          description: "",
        });
      } else {
        setStatus("error");
        setErrors({ general: result.errors?.[0] || "Something went wrong" });
      }
    } catch {
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
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-700">
            We prefer focused technical conversations over generic marketing. If you are
            responsible for an industrial plant, we are happy to discuss whether TES
            would make sense for your site.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Enquiry form */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              {status === "success" ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-6 w-6 text-green-600"
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
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    Message sent successfully
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Thank you for your enquiry. We typically respond within 1-2
                    business days.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-semibold text-brand-500 hover:text-brand-800"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Send a message
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Please fill in the details below and we will get back to you as soon as possible.
                  </p>

                  {errors.general && (
                    <div className="mt-4 rounded-md bg-red-50 p-3">
                      <p className="text-sm text-red-700">{errors.general}</p>
                    </div>
                  )}

                  <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-xs font-semibold text-gray-800">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`mt-1 w-full rounded-md border px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 ${
                          errors.name
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-brand-500 focus:ring-brand-500"
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-800">
                        Organisation / Site
                      </label>
                      <input
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                        placeholder="e.g. Eskom Power Station, mine, refinery, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-800">
                        Your email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 w-full rounded-md border px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 ${
                          errors.email
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-brand-500 focus:ring-brand-500"
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-800">
                        Area of interest
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
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
                      <label className="block text-xs font-semibold text-gray-800">
                        Brief description
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                        rows={4}
                        placeholder="Please provide a brief description of your operational context and what you would like to explore."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
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
              <h2 className="text-lg font-semibold text-gray-900">
                Direct contact
              </h2>

              <div className="rounded-lg border bg-gray-50 p-4 text-sm text-gray-800">

                <p className="font-semibold text-gray-900">TES</p>
                <p>B-BBEE Level 1 Contributor</p>
                <p className="mt-1">Technical Director: Lazola Sonqishe</p>
                <p className="mt-2">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:lazola@tes.net"
                    className="text-brand-500 hover:text-brand-900"
                  >
                    lazola@tes.net
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Mobile:</span>{" "}
                  <a
                    href="tel:+27794648298"
                    className="text-brand-500 hover:text-brand-900"
                  >
                    +27 79 464 8298
                  </a>
                </p>
                <p className="mt-2">
                  <span className="font-semibold">General enquiries:</span>{" "}
                  <a
                    href="mailto:info@tes.net"
                    className="text-brand-500 hover:text-brand-900"
                  >
                    info@tes.net
                  </a>
                </p>
              </div>


            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-gray-900">Additional note</h2>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              For any technical questions, please contact Lazola Sonqishe directly
              using the details above.
            </p>
          </div>


        </div>
      </section>
    </main>
  );
}
