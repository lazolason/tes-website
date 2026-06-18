import type { Metadata } from "next";

const contactSocialImage = {
  url: "/og/contact.png",
  width: 1200,
  height: 630,
  alt: "Mexel Energy Sustain contact page social preview",
};

export const metadata: Metadata = {
  title: "Contact Us - Start Your TES Enquiry",
  description:
    "Contact Mexel Energy Sustain to discuss TES pilots, Mexel®432 cooling-water treatment, and efficiency solutions for power stations and industrial facilities. Direct technical contact available.",
  alternates: {
    canonical: "/contact/",
  },
  keywords: [
    "contact Mexel",
    "TES enquiry",
    "cooling water treatment contact",
    "power station efficiency",
    "Mexel432 contact",
    "technical audit request"
  ],
  openGraph: {
    title: "Contact Mexel Energy Sustain | TES Technical Enquiry",
    url: "/contact/",
    description:
      "Start a technical conversation about TES cooling-water efficiency solutions, Mexel®432 performance emulsions, and condenser optimization for your facility.",
    type: "website",
    images: [contactSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mexel Energy Sustain",
    description: "Technical enquiries for TES cooling-water efficiency solutions",
    images: [contactSocialImage.url],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
