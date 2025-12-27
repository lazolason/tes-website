import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PremiumHero from "../components/PremiumHero";
import {
  TrustedBySkeleton,
  IndustryGridSkeleton,
  ProcessSkeleton,
  StatsSkeleton,
  TestimonialsSkeleton
} from "../components/skeletons/HomeSkeletons";

// Lazy load below-the-fold components for better initial page load
const TrustedBy = dynamic(() => import("../components/TrustedBy"), {
  loading: () => <TrustedBySkeleton />,
});

const VisualIndustryGrid = dynamic(() => import("../components/VisualIndustryGrid"), {
  loading: () => <IndustryGridSkeleton />,
});

const ModernProcess = dynamic(() => import("../components/ModernProcess"), {
  loading: () => <ProcessSkeleton />,
});

const DataInsights = dynamic(() => import("../components/DataInsights"), {
  loading: () => <StatsSkeleton />,
});

const PremiumTestimonials = dynamic(() => import("../components/PremiumTestimonials"), {
  loading: () => <TestimonialsSkeleton />,
});

const ValidationSection = dynamic(() => import("../components/ValidationSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const CTASection = dynamic(() => import("../components/CTASection"), {
  loading: () => <div className="h-64 bg-emerald-600 animate-pulse" />,
});

export const metadata: Metadata = {
  title: "Mexel Energy Sustain | Cooling-Water Efficiency Solutions",
  description:
    "Measured thermal efficiency recovery for wet-cooled power stations and industrial cooling systems. Verified results, not guesswork.",
};

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* 1. HOOK: Flagship Hero with Problem/Solution Visuals */}
      <PremiumHero />

      {/* 2. SOCIAL PROOF: Trusted Industry Leaders */}
      <TrustedBy />

      {/* 3. CONTEXT: Visual Industry Solutions */}
      <VisualIndustryGrid />

      {/* 4. MECHANISM: The Disciplined 4-Step Process */}
      <ModernProcess />

      {/* 5. PROOF: Technical Data Insights */}
      <DataInsights />

      {/* 6. EXTENDED PROOF: Client Voice */}
      <PremiumTestimonials />

      {/* 7. VALIDATION: Standards & Compliance (Standards mention) */}
      <ValidationSection />

      {/* 8. ACTION: Final CTA Section */}
      <CTASection />
    </main>
  );
}
