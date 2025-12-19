"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function HeroCTA() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Link
        href="/contact"
        onClick={() => trackEvent("CTA Clicked", { location: "Hero Section", action: "Request Pilot Study" })}
        className="rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all hover:shadow-lg hover:shadow-emerald-600/30"
      >
        Request a Pilot Study
      </Link>
      <Link
        href="/products"
        onClick={() => trackEvent("CTA Clicked", { location: "Hero Section", action: "Technical Specs" })}
        className="rounded-lg bg-slate-100 px-6 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition-all"
      >
        Technical Specs →
      </Link>
    </div>
  );
}
