import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PremiumHero from "../components/PremiumHero";
import {
  IndustryGridSkeleton,
  ProcessSkeleton,
  DashboardSkeleton,
  CTASkeleton
} from "../components/skeletons/HomeSkeletons";

// Lazy load below-the-fold components for better initial page load
const LiveDashboard = dynamic(() => import("../components/LiveDashboard"), {
  loading: () => <DashboardSkeleton />,
});

const VisualIndustryGrid = dynamic(() => import("../components/VisualIndustryGrid"), {
  loading: () => <IndustryGridSkeleton />,
});

const ModernProcess = dynamic(() => import("../components/ModernProcess"), {
  loading: () => <ProcessSkeleton />,
});

const CTASection = dynamic(() => import("../components/CTASection"), {
  loading: () => <CTASkeleton />,
});

const homeSocialImage = {
  url: "/og/home.png",
  width: 1200,
  height: 630,
  alt: "Mexel Energy Sustain homepage social preview",
};

export const metadata: Metadata = {
  title: "Mexel®432 | Cooling-Water Efficiency Solutions",
  description:
    "Mexel®432 supports evidence-led condenser-performance and cooling-water efficiency reviews using thermodynamic baselines.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Mexel®432 | Cooling-Water Efficiency Solutions",
    description:
      "Mexel®432 supports evidence-led condenser-performance and cooling-water efficiency reviews using thermodynamic baselines.",
    images: [homeSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexel®432 | Cooling-Water Efficiency Solutions",
    description:
      "Mexel®432 supports evidence-led condenser-performance and cooling-water efficiency reviews using thermodynamic baselines.",
    images: [homeSocialImage.url],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* 1. HOOK: Flagship Hero with Problem/Solution Visuals */}
      <PremiumHero />

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
              Demonstration view of how TR and TTD can be tracked through a baseline,
              intervention and review window using station data.
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
