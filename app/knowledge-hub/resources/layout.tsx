import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Technical resources, white papers and documentation from Mexel Energy Sustain: TES system overview, Mexel®432 technical data and case study reports.",
  openGraph: {
    title: "Resources | Mexel Energy Sustain",
    description:
      "Download technical resources, white papers and case study documentation.",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
