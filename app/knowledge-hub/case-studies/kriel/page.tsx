import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eskom Kriel Power Station Case Study | TES",
  description: "Official trial data from Eskom Kriel Power Station (2018) validating Mexel®432 cooling water treatment performance.",
};

export default function KrielCaseStudyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Eskom Kriel Power Station: Unit 6 Condenser Recovery",
    "description": "A verified pilot demonstrating the efficacy of Mexel®432 in reversing severe condenser fouling, restoring thermal efficiency, and improving Terminal Temperature Difference (TTD) within days of application.",
    "author": {
      "@type": "Organization",
      "name": "Mexel Energy Sustain"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mexel Energy Sustain"
    },
    "datePublished": "2018-05-01"
  };

  return (
    <main className="min-h-screen bg-white pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <section className="bg-slate-900 text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/power-gen.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/knowledge-hub/case-studies" className="text-brand-400 hover:text-white text-sm font-semibold mb-6 inline-flex items-center transition-colors">
            &larr; Back to Case Studies
          </Link>
          <div className="flex items-center space-x-3 mb-4">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300 border border-emerald-500/30">
              Verified Trial
            </span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">
              May 2018
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Eskom Kriel Power Station: Unit 6 Condenser Recovery
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            A verified pilot demonstrating the efficacy of Mexel®432 in reversing severe condenser fouling, restoring thermal efficiency, and improving Terminal Temperature Difference (TTD) within days of application.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Executive Summary */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-16 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Executive Summary</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Location</p>
              <p className="font-semibold text-slate-900">Kriel Power Station (South CW System, Unit 6)</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Dosing Protocol</p>
              <p className="font-semibold text-slate-900">5ppm for 30 min/day</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium mb-1">Key Result</p>
              <p className="font-semibold text-emerald-600">Cleanliness factor improved from 29% to 69% in 3 days</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand-600 hover:prose-a:text-brand-700">
          
          <h2>1. The Challenge: Baseline Conditions</h2>
          <p>
            Prior to the intervention in May 2018, Unit 6 at Kriel Power Station was experiencing significant performance degradation due to condenser tube fouling. Baseline readings indicated poor heat transfer efficiency, severely impacting the unit's thermal performance.
          </p>
          <ul>
            <li><strong>Initial TTD (Terminal Temperature Difference):</strong> Averaged 13°C against a design target of 1.7°C.</li>
            <li><strong>Condenser Cleanliness Factor:</strong> Dropped to a critical low of 29%.</li>
            <li><strong>Backpressure:</strong> Deviating 2.08 kPa above target optimum levels.</li>
          </ul>

          <h2>2. The Protocol</h2>
          <p>
            A multi-disciplinary team comprising Chemical Services, Auxiliary, and Process Engineering initiated a trial using Mexel®432 on the South Cooling Water (CW) system. The product is a non-oxidizing, film-forming amine emulsion designed to detach biofilm and scale while establishing an anti-corrosion barrier at the molecular level.
          </p>
          <p>
            <strong>Application:</strong> The chemical was dosed into the center well of the CW South system. The rate was set to 5 ppm of 100% concentration Mexel®432/0, injected for just 30 minutes daily.
          </p>
          <p>
            <strong>Measurement Methodology:</strong> Performance was tracked using real-time DCS (Distributed Control Systems) data via ProcessBook, LIMS, and STEP reports. Condenser efficiency was analyzed using the 4-temperature methodology (Gibbard & Terranova) measuring TTD and backpressure deviation.
          </p>

          <h2>3. Measured Results</h2>
          <p>
            The intervention yielded immediate and measurable improvements in thermodynamic performance, clearly visible within the first 72 hours of dosage.
          </p>

          <div className="my-10 overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 m-0">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Metric</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Pre-Trial Baseline</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-emerald-600 uppercase tracking-wider">During Dosage</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Condenser Cleanliness Factor</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">29%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-600">69%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Terminal Temp. Diff (TTD) - West</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">12.10°C</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-600">6.01°C - 8.22°C</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Actual TTD vs Target (1.7°C)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">13°C</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-600">4.3°C</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Backpressure Deviation</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">+2.08 kPa</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-600">+0.6 kPa</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Microbiology (Aerobic Count)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">Baseline Level</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-emerald-600">~80% Reduction</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Secondary Observations</h3>
          <ul>
            <li><strong>Water Chemistry Stability:</strong> Conductivity, pH, and turbidity remained strictly within cooling water standard specifications throughout the trial.</li>
            <li><strong>Alkalinity Indicator:</strong> M-Alkalinity increased from 81 to a peak of 146 mg/l (as CaCO3) during dosing. This was attributed directly to the presence of alkyl amines from Mexel®432, confirming distribution through the system without contributing to scaling.</li>
          </ul>

          <div className="bg-brand-50 border-l-4 border-brand-500 p-6 my-10 rounded-r-lg">
            <h4 className="text-brand-800 font-bold mt-0 mb-2">Eskom RT&amp;D Conclusion (Excerpt)</h4>
            <p className="text-brand-900 text-sm italic m-0">
              "The seemingly perceptible observations made showed an improvement of approximately 30% for condenser cleanliness factor within 3 days of application. This shows the dispensation effect of Mexel®432 on the formed scale/fouling. Another observation showed an improvement in terminal temperature difference (TTD) for unit 6 based on the condenser efficiency analysis."
            </p>
            <p className="text-brand-700 text-xs mt-3 mb-0">
              — Official Report RTD/ACM/18/240-142764661
            </p>
          </div>

          <h2>4. Derived CO₂ and Efficiency Impact</h2>
          <p>
            While ASME PTC 12.2 protocols verify the direct thermal and thermodynamic recovery (TTD/TR), these metrics directly correlate to improved station heat rate. A cleaner condenser allows the turbine to exhaust at a lower backpressure, extracting more mechanical work per ton of coal combusted.
          </p>
          <p>
            By reducing the backpressure deviation from 2.08 kPa down to 0.6 kPa, Unit 6 demonstrated the capacity to significantly reduce its derived CO₂ emissions per MWh generated, aligning with Eskom's strategic operational and environmental targets.
          </p>

        </div>
        
        {/* Call to Action Footer */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Validate this approach for your station</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Our engineering team can review your current TTD and backpressure data to model projected heat rate recovery and derived CO₂ reductions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="inline-flex justify-center items-center rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 transition-colors">
                Contact Engineering
              </Link>
            </div>
          </div>
        </div>

      </article>
    </main>
  );
}
