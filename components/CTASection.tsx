"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import { trackEvent } from "@/lib/analytics";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-emerald-600 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
          {/* Background Blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-float-delayed"></div>
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to restore your plant&apos;s efficiency?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-100">
                Join leading power stations and industrial plants using TES to stop micro-fouling and reclaim lost megawatts.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  onClick={() => trackEvent("CTA Clicked", { location: "CTA Section", action: "Request Pilot Study" })}
                  className="rounded-full bg-white px-8 py-4 text-sm font-bold text-emerald-600 shadow-sm hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 transform hover:scale-105"
                >
                  Request a Pilot Study
                </Link>
                <Link 
                  href="/knowledge-hub/case-studies" 
                  onClick={() => trackEvent("CTA Clicked", { location: "CTA Section", action: "View Case Studies" })}
                  className="text-sm font-bold leading-6 text-white hover:text-emerald-100 transition-colors"
                >
                  View Case Studies <span aria-hidden="true">→</span>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Abstract SVG decorations */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.15" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="white" />
                <stop offset={1} stopColor="white" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Contact Info below CTA */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-slate-500">
           <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">info@mexelenergysustain.com</span>
           </div>
           <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium">South Africa | Global</span>
           </div>
        </div>
      </div>
    </section>
  );
}
