"use client";

import { useState, useEffect, useRef } from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The TES approach gave us clear, measurable data on condenser performance. For the first time, we could see exactly what the chemical treatment was achieving.",
    author: "Senior Plant Engineer",
    role: "Generation Division",
    organization: "Eskom Power Station",
  },
  {
    quote:
      "Mexel®432 simplified our water treatment regime. One product replacing multiple chemicals, with better results and easier monitoring.",
    author: "Water Treatment Specialist",
    role: "Operations",
    organization: "Industrial Cooling User",
  },
  {
    quote:
      "The RT&D protocol framework and independent verification gave us confidence in the results. This isn&apos;t marketing – it&apos;s engineering.",
    author: "Technical Manager",
    role: "Research & Development",
    organization: "Energy Sector Client",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="border-b bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Client Feedback
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900 sm:text-3xl">
            What Industry Professionals Say
          </h2>
        </div>

        <div
          className={`relative mt-12 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Quote icon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          {/* Testimonial card */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg lg:p-12">
            <div className="min-h-[160px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentIndex
                      ? "opacity-100"
                      : "absolute opacity-0"
                  }`}
                >
                  {index === currentIndex && (
                    <>
                      <p className="text-center text-base sm:text-lg leading-relaxed text-gray-700 lg:text-xl">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="mt-6 text-center">
                        <p className="text-sm sm:text-base font-semibold text-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {testimonial.role} · {testimonial.organization}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation dots - Touch-friendly */}
            <div className="mt-8 flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${
                    index === currentIndex
                      ? "bg-transparent"
                      : "bg-transparent"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full block transition-all ${
                    index === currentIndex
                      ? "w-8 bg-brand-500"
                      : "bg-gray-300"
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
