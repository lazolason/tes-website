import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mexel Energy Sustain to discuss TES pilots, Mexel®432 for cooling-water treatment, or MexSteam 100 for boiler protection. Direct technical contact with Lazola Sonqishe.",
  openGraph: {
    title: "Contact Mexel Energy Sustain",
    description:
      "Discuss TES pilots and cooling-water efficiency solutions.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
