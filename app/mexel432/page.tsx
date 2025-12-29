import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import FadeIn from "../../components/FadeIn";
import Tooltip from "../../components/Tooltip";
import { BiofoulingIcon, CorrosionIcon, ScalingIcon } from "../../components/BenefitIcons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mexel®432",
  description:
    "Mexel®432: Non-oxidant emulsion chemistry for cooling-water treatment. Detaches biofilm, prevents fouling, inhibits corrosion in condensers and heat exchangers.",
  openGraph: {
    title: "Mexel®432 Chemistry | Mexel Energy Sustain",
    description:
      "Surface-active cooling-water treatment that replaces multiple chemicals with a single molecular film approach.",
  },
};

export default function Mexel432Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero with Infographic */}
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Mexel®432
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Restoring Thermal Efficiency: The Mexel®432 Solution
            </h1>
            <p className="mt-5 max-w-3xl mx-auto text-base leading-relaxed text-slate-600">
              A non-oxidant, surface-active emulsion that detaches existing biofilm, prevents regrowth, and maintains condenser cleanliness with a protective molecular film.
            </p>
          </div>

          {/* Technical Infographic */}
          <div className="mt-10 relative h-96 md:h-[32rem] lg:h-[40rem]">
            <Image
              src="/before-after-tubes.webp"
              alt="Before: Heavily fouled condenser tubes vs After: Restored tubes with Mexel432 treatment"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
          </div>
        </div>
      </section>

      {/* What is Mexel®432 */}
      <section className="border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                What is Mexel®432?
              </h2>
              <div className="mt-6 space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Mexel®432 is a <span className="font-semibold">long-chain alkyl amine emulsion</span> designed for cooling-water service in condensers, heat exchangers and cooling towers. Unlike oxidising biocides or traditional multi-chemical programs, Mexel®432 works through a surface-active mechanism.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  It forms a <span className="font-semibold">protective molecular film</span> on wetted metal surfaces. This single treatment replaces separate biocides, anti-scalants, dispersants and corrosion inhibitors, helping stations burn less coal or fuel per net MWh.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Non-oxidant
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Biodegradable
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Surface-active
                  </span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">Key characteristics</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>No chlorine, bromine or peroxide required.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Effective across variable water quality and pH ranges.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Single-product replacement for multi-chemical dosing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Minimal environmental footprint compared to oxidants.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Detailed Functions */}
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Technical Functions
            </h2>
            <p className="mt-3 text-base text-slate-600">
              The four primary mechanisms through which Mexel®432 protects cooling-water infrastructure.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <BiofoulingIcon className="w-6 h-6" />,
                title: "Film-forming layer",
                description: "Creates a protective molecular film on wetted surfaces, making it harder for deposits to attach.",
                tooltip: "Film-Forming Amines (FFA) create a hydrophobic molecular layer that modifies surface energy, reducing adhesion of biological and mineral deposits.",
              },
              {
                icon: <BiofoulingIcon className="w-6 h-6" />,
                title: "Biofouling control",
                description: "Detaches and controls biofilm, algae and organic deposits in condenser tubes.",
                tooltip: "Biofouling is the accumulation of microorganisms on cooling surfaces. Mexel®432 disrupts biofilm attachment without traditional oxidizing biocides.",
              },
              {
                icon: <CorrosionIcon className="w-6 h-6" />,
                title: "Corrosion inhibitor",
                description: "Reduces corrosion on carbon steel by forming a barrier between metal and water.",
                tooltip: "Corrosion inhibition works by creating a protective film that isolates the metal surface from dissolved oxygen and corrosive ions.",
              },
              {
                icon: <ScalingIcon className="w-6 h-6" />,
                title: "Scaling control",
                description: "Interferes with scale formation on heat-transfer surfaces.",
                tooltip: "Scaling occurs when minerals precipitate onto hot surfaces. Mexel®432 modifies crystal growth and keeps particles dispersed.",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-emerald-300 hover:shadow-md hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    <Tooltip content={item.tooltip}>
                      <span>{item.title}</span>
                    </Tooltip>
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Role in TES and Boundaries */}
      <section className="border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/30 p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Role within TES</h3>
                <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                  Within the TES system architecture, Mexel®432 is the primary technical intervention. The IoT dosing, predictive data view, and verification framework are built specifically to demonstrate the product&apos;s impact on condenser cleanliness.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Link href="/tes" className="text-xs font-bold text-emerald-700 hover:text-emerald-900">
                    View TES Architecture →
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Verification boundary</h3>
                <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                  TES verification is explicitly defined around Mexel®432 in cooling-water service, using restricted baseline protocols. Other chemicals are kept outside the TES efficiency claims unless a separate methodology is developed.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Link href="/knowledge-hub/engineering-playbook/protocol" className="text-xs font-bold text-slate-700 hover:text-emerald-700">
                    View Protocol Details →
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Evidence and Case Studies
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Documented performance gains across utility and industrial sectors.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900 underline decoration-emerald-500 decoration-2 underline-offset-4">Kriel Power Station (South Africa)</h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Mexel®432 application at Kriel showed <span className="font-semibold text-slate-900 font-medium">40% performance improvement</span> on Unit 6, with significant temperature rise improvement demonstrated over a 90-day trial period.
                </p>
                <p className="mt-3 text-xs text-slate-500 italic">
                  Documented by Eskom RT&D with station data showing measurable condenser efficiency gains.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900 underline decoration-emerald-500 decoration-2 underline-offset-4">International References</h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Mexel®432 has been applied in thermal and nuclear power plants, refineries, and petrochemical facilities across France, USA, UAE, Japan, Brazil and India.
                </p>
                <p className="mt-3 text-xs text-slate-500 italic">
                  Common results: improved condenser cleanliness, reduced corrosion, measurable heat-rate improvements.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="mt-8">
            <Link
              href="/knowledge-hub/case-studies"
              className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:underline"
            >
              See detailed case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Typical Applications */}
      <section className="border-b border-slate-200/70 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Typical Applications
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Wet-cooled coal-fired units",
              "Nuclear power cooling circuits",
              "Refineries & Steel plants",
              "Mining process water",
              "Food & Beverage processing",
              "Seawater intake systems",
            ].map((app, index) => (
              <FadeIn key={app} delay={index * 50}>
                <div className="flex items-center gap-3 rounded-lg border border-slate-100 p-4 shadow-sm hover:border-emerald-200">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium text-slate-700">{app}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/10 skew-x-12 translate-x-1/2" />
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20 relative z-10">
          <FadeIn>
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight">
                  Interested in Mexel®432 for your site?
                </h2>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  We prefer to start with your specific cooling-water context. A short technical discussion is usually enough to see if Mexel®432 makes sense for your infrastructure.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                  Contact Technical Team
                </Link>
                <Link
                  href="/tes"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  Learn about TES
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
