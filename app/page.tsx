import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PremiumHero from "../components/PremiumHero";
import {
  // TrustedBySkeleton,
  IndustryGridSkeleton,
  ProcessSkeleton
} from "../components/skeletons/HomeSkeletons";

// Lazy load below-the-fold components for better initial page load
// const TrustedBy = dynamic(() => import("../components/TrustedBy"), {
//   loading: () => <TrustedBySkeleton />,
// });

const LiveDashboard = dynamic(() => import("../components/LiveDashboard"), {
  loading: () => <div className="h-96 bg-slate-900 animate-pulse rounded-3xl" />,
});

const VisualIndustryGrid = dynamic(() => import("../components/VisualIndustryGrid"), {
  loading: () => <IndustryGridSkeleton />,
});

const ModernProcess = dynamic(() => import("../components/ModernProcess"), {
  loading: () => <ProcessSkeleton />,
});

const CTASection = dynamic(() => import("../components/CTASection"), {
  loading: () => <div className="h-64 bg-emerald-600 animate-pulse" />,
});

export const metadata: Metadata = {
  title: "Mexel®432 | Cooling-Water Efficiency Solutions",
  description:
    "Mexel®432 restores condenser performance and cooling-water efficiency with verified thermodynamic baselines.",
};

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* 1. HOOK: Flagship Hero with Problem/Solution Visuals */}
      <PremiumHero />

      {/* 2. SOCIAL PROOF: Trusted Industry Leaders */}
      {/* <TrustedBy /> */}

      {/* 2. CONTEXT: Visual Industry Solutions */}
      <VisualIndustryGrid />

      {/* 3. PROOF: Live Performance Dashboard */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 rounded-full mb-4">
              Real-Time Performance
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              See TES in Action
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Live visualization of thermal efficiency recovery. Watch how TR and TTD improve
              over an 8-week intervention based on verified station data.
            </p>
          </div>
          <LiveDashboard />
        </div>
      </section>

      {/* 4. MECHANISM: The Disciplined 4-Step Process */}
      <ModernProcess />

      {/* 5. ACTION: Final CTA Section */}
      <CTASection />
    </main>
  );
}
