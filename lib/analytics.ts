"use client";

type AnalyticsValue = string | number | boolean | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

function canTrack(): boolean {
  return (
    typeof window !== "undefined" &&
    GA_MEASUREMENT_ID !== "" &&
    typeof window.gtag === "function"
  );
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}): void {
  if (!canTrack()) {
    return;
  }

  window.gtag?.("event", eventName, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
  });
}

export function trackTechnicalAuditClick(location: string): void {
  trackEvent("technical_audit_click", {
    event_category: "engagement",
    cta_location: location,
    destination: "/contact?topic=Technical%20Audit",
  });
}

export function trackGeneralEnquiryClick(location: string): void {
  trackEvent("general_enquiry_click", {
    event_category: "engagement",
    cta_location: location,
    destination: "/contact?topic=General%20Enquiry",
  });
}

export function trackWhatsAppClick(location: string): void {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    cta_location: location,
    destination: "https://wa.me/27794648298",
  });
}

export function trackCompanyProfileClick(location: string): void {
  trackEvent("company_profile_click", {
    event_category: "engagement",
    cta_location: location,
    destination: "/company-profile",
  });
}

export function trackCompanyProfileOpen(location: string): void {
  trackEvent("company_profile_open", {
    event_category: "engagement",
    cta_location: location,
    destination: "/company-profile-static/index.html",
  });
}

export function trackContactFormSuccess(topic: string): void {
  trackEvent("generate_lead", {
    event_category: "lead",
    form_name: "contact_form",
    topic: topic || "Unspecified",
  });

  trackEvent("contact_form_submit_success", {
    event_category: "lead",
    form_name: "contact_form",
    topic: topic || "Unspecified",
  });
}

export function trackContactFormError(topic: string, errorType: string): void {
  trackEvent("contact_form_submit_error", {
    event_category: "lead",
    form_name: "contact_form",
    topic: topic || "Unspecified",
    error_type: errorType,
  });
}
