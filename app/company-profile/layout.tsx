import type { Metadata } from "next";

const companyProfileImage = {
  url: "/og/company-profile.png",
  width: 1200,
  height: 630,
  alt: "Mexel Energy Sustain company profile preview",
};

export const metadata: Metadata = {
  title: "Company Profile | Mexel Energy Sustain",
  description:
    "Interactive company profile covering TES methodology, deployment model and the engineering case for Mexel(R)432 in heavy industry.",
  openGraph: {
    title: "Company Profile | Mexel Energy Sustain",
    description:
      "Explore the Mexel Energy Sustain company profile, including TES methodology, deployment model and engineering positioning.",
    type: "website",
    images: [companyProfileImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company Profile | Mexel Energy Sustain",
    description:
      "Interactive overview of TES methodology, deployment model and Mexel(R)432 positioning.",
    images: [companyProfileImage.url],
  },
};

export default function CompanyProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
