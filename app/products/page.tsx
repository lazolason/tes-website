import Link from "next/link";
import Image from "next/image";
import FadeIn from "../../components/FadeIn";
import SystemHeader from "../../components/SystemHeader";
import Tooltip from "../../components/Tooltip";
import { BiofoulingIcon, CorrosionIcon, ScalingIcon } from "../../components/BenefitIcons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products – Mexel®432 & MexSteam 100",
  description:
    "Mexel®432 for cooling-water treatment: film-forming amine chemistry that controls biofouling, corrosion and scaling. MexSteam 100 for boiler and steam-side protection.",
  openGraph: {
    title: "Mexel®432 & MexSteam 100 | Mexel Energy Sustain",
    description:
      "Film-forming amine chemistry for cooling-water and steam systems.",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SystemHeader
        tag="TES COMPONENTS"
        title="Components within the TES architecture."
        description="These components enable traceable dosing and measured condenser performance (TR, TTD, vacuum) within the TES system boundary."
        continuity="These are the components used in the TES architecture."
        currentLabel="Components"
        activeSteps={[0, 1]}
      />

      {/* Mexel 432 – primary TES product */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              How Mexel®432 Works
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600">
              Film-forming chemistry that replaces biofilm with a protective molecular layer.
            </p>
          </FadeIn>
          
          {/* Condenser system image */}
          <FadeIn delay={200}>
            <div className="relative mt-8 h-48 w-full overflow-hidden rounded-xl lg:h-64">
              <Image
                src="/condenser.png"
                alt="Condenser heat exchanger system"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 75vw"
              />
            </div>
          </FadeIn>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <FadeIn>
              <div className="max-w-xl">
              <h2 className="text-xl font-semibold text-slate-900">
                Mexel®432 – Cooling-water film-forming amine/surfactant
              </h2>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Mexel®432 is a non-oxidant, film-forming amine emulsion
                containing a specialised surfactant system. It is designed for
                once-through and recirculating cooling-water systems using river,
                dam, mine or seawater. In TES, Mexel®432 is the core chemistry
                used to restore and maintain condenser and cooling-water
                performance.
              </p>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Applied correctly, Mexel®432 reduces fouling and corrosion at the
                cold end, helping stations burn less coal or fuel per net MWh,
                reduce emissions intensity and extend asset life.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-xs">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
                  Cooling-water TES core product
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-800">
                  Film-forming amine (FFA)
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
                  Multi-function chemistry
                </span>
              </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="max-w-md">
              <h3 className="text-sm font-semibold text-slate-900">
                Key functions in cooling-water systems
              </h3>
              <div className="mt-4 space-y-3">
                {[
                  {
                    icon: <BiofoulingIcon className="w-5 h-5" />,
                    title: "Film-forming layer",
                    description: "Creates a protective molecular film on wetted surfaces, making it harder for deposits to attach.",
                    tooltip: "Film-Forming Amines (FFA) create a hydrophobic molecular layer that modifies surface energy, reducing adhesion of biological and mineral deposits.",
                  },
                  {
                    icon: <BiofoulingIcon className="w-5 h-5" />,
                    title: "Biofouling control",
                    description: "Detaches and controls biofilm, algae and organic deposits in condenser tubes.",
                    tooltip: "Biofouling is the accumulation of microorganisms, algae, and biofilm on cooling surfaces. Mexel®432 disrupts biofilm attachment and growth without traditional oxidizing biocides.",
                  },
                  {
                    icon: <CorrosionIcon className="w-5 h-5" />,
                    title: "Corrosion inhibitor",
                    description: "Reduces corrosion on carbon steel by forming a barrier between metal and water.",
                    tooltip: "Corrosion inhibition works by creating a protective film that isolates the metal surface from dissolved oxygen and corrosive ions in the cooling water.",
                  },
                  {
                    icon: <ScalingIcon className="w-5 h-5" />,
                    title: "Scaling control",
                    description: "Interferes with scale formation on heat-transfer surfaces.",
                    tooltip: "Scaling occurs when dissolved minerals (calcium, magnesium, silica) precipitate onto hot surfaces. Mexel®432 modifies crystal growth and keeps particles dispersed.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-all duration-200 hover:border-emerald-300 hover:shadow-md"
                  >
                    <div className="flex-shrink-0 rounded-full bg-emerald-50 p-2 text-emerald-700 transition-transform duration-200 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <Tooltip content={item.tooltip}>
                        <h4 className="text-xs font-semibold text-slate-900">
                          {item.title}
                        </h4>
                      </Tooltip>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </FadeIn>
          </div>

          {/* Role in TES */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Role within TES
              </h3>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                Within TES, Mexel®432 is the primary intervention at the cold
                end. The IoT dosing, data view and verification framework are
                built specifically to understand and demonstrate what Mexel®432
                is doing for condenser cleanliness and cooling-water performance.
              </p>
            </div>
            <div className="rounded-lg border bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Verification boundary
              </h3>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                TES verification is explicitly defined around Mexel®432 in
                cooling-water service, using Eskom RT&amp;D&apos;s baseline →
                intervention → post-intervention protocol. Other products are
                not included in TES efficiency claims unless a separate,
                station-approved methodology is developed.
              </p>
            </div>
            <div className="rounded-lg border bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Typical applications
              </h3>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                • Wet-cooled coal-fired units (condenser and cooling-tower
                circuits){" "}
                <br />
                • Once-through and recirculating cooling systems at industrial
                sites (mines, refineries, steel, pulp &amp; paper, breweries,
                laundries){" "}
                <br />
                • Seawater, river, dam and blended mine-water systems where
                fouling, corrosion and scaling are persistent issues.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link
              href="/tes"
              className="inline-flex items-center text-xs font-semibold text-emerald-600 hover:text-emerald-800"
            >
              See how Mexel®432 fits into TES →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-xs font-semibold text-emerald-600 hover:text-emerald-800"
            >
              Request Mexel®432 technical data sheets →
            </Link>
          </div>
        </div>
      </section>

      {/* MexSteam 100 – separate, boiler-side strategic product */}
      <section id="mexsteam" className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              How MexSteam 100 Works
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600">
              Film-forming chemistry for boiler-side protection and steam-system efficiency.
            </p>
          </FadeIn>

          {/* Boiler system image */}
          <FadeIn delay={200}>
            <div className="relative mt-8 h-48 w-full overflow-hidden rounded-xl lg:h-64">
              {/* TODO: Add boiler-system.png image */}
              {/* Image brief: Boiler steam generation system with visible tubes, economizer, and steam lines */}
              <div className="flex h-full items-center justify-center bg-slate-200 text-xs text-slate-500">
                Boiler System Image Placeholder
              </div>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <FadeIn>
              <div className="max-w-xl">
                <h2 className="text-xl font-semibold text-slate-900">
                  MexSteam 100 – Boiler-side strategic product
                </h2>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                  MexSteam 100 is a film-forming amine-based treatment designed
                  for boiler feedwater, condensate return and steam systems. It
                  provides corrosion protection and helps maintain heat-transfer
                  surfaces in high-temperature, high-pressure boiler environments.
                </p>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                  MexSteam 100 is positioned as a strategic complement to TES at
                  the plant level. It is deliberately kept outside the current TES
                  verification boundary. Any efficiency or fuel-related claims for
                  MexSteam 100 would need their own test plan and station-approved
                  methodology.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-xs">
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
                    Boiler / steam-side
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-800">
                    Film-forming amine (FFA)
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
                    Strategic complement to TES
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="max-w-md rounded-lg border bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Key functions in boiler and steam systems
                </h3>
                <ul className="mt-3 space-y-2 text-xs text-slate-700 leading-relaxed">
                  <li>
                    • <span className="font-semibold">Corrosion protection:</span>{" "}
                    forms a protective molecular film on metal surfaces in
                    feedwater, condensate return and steam lines, reducing
                    corrosion from oxygen, carbonic acid and other dissolved
                    gases.
                  </li>
                  <li>
                    • <span className="font-semibold">Deposition control:</span>{" "}
                    helps prevent scale formation and fouling on boiler tubes,
                    economizers and other heat-transfer surfaces, maintaining
                    thermal efficiency and reducing shutdown risk.
                  </li>
                  <li>
                    • <span className="font-semibold">Condensate pH stabilisation:</span>{" "}
                    assists in maintaining condensate pH within acceptable
                    operating ranges, reducing the risk of low-pH corrosion in
                    return lines and feedwater circuits.
                  </li>
                  <li>
                    • <span className="font-semibold">Steam purity maintenance:</span>{" "}
                    designed to minimise carryover and maintain steam quality by
                    reducing the tendency for deposits to form on critical
                    surfaces and enter the steam phase.
                  </li>
                  <li>
                    • <span className="font-semibold">Compatibility with feedwater systems:</span>{" "}
                    suitable for use in conjunction with modern feedwater
                    treatment regimes, including demineralised and polished
                    water systems in power generation and industrial applications.
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Role in relation to TES */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Role as strategic complement
              </h3>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                MexSteam 100 addresses boiler-side efficiency and protection
                challenges that are separate from the TES cooling-water focus.
                Together, they provide plant-wide water chemistry solutions:
                TES for cooling-water and condensers, MexSteam for boilers and
                steam circuits.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Why outside TES verification
              </h3>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                TES verification is explicitly defined around Mexel®432 in
                cooling-water service, using the RT&amp;D baseline protocol.
                MexSteam 100 operates in a different system boundary (boiler
                and steam-side) and would require a separate, station-approved
                test methodology and verification framework.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Typical boiler applications
              </h3>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                • High-pressure boilers in power stations (coal, gas, biomass)
                <br />
                • Industrial steam generators (mining, petrochemical, food
                processing)
                <br />
                • Heat recovery steam generators (HRSG) and combined-cycle plants
                <br />
                • Condensate return and feedwater treatment circuits
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link
              href="/industries/power-energy#mexsteam"
              className="inline-flex items-center text-xs font-semibold text-emerald-600 hover:text-emerald-800"
            >
              See boiler applications in power & energy →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-xs font-semibold text-emerald-600 hover:text-emerald-800"
            >
              Request MexSteam 100 technical data sheets →
            </Link>
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-700">Verification note:</span>{" "}
              TES communications and verification remain focused on Mexel®432 in
              cooling-water service. MexSteam 100 is available as a separate
              discussion for customers with suitable boiler and condensate systems.
              Any efficiency or fuel-related claims would require independent
              testing and station-approved methodology.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 lg:py-12">
          <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Need to understand how these products fit your plant?
              </h2>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                We prefer to start with your specific cooling-water or boiler
                context, not a generic brochure. A short technical discussion is
                usually enough to see whether Mexel®432, MexSteam 100 or TES as
                a system makes sense for your site.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                Request a Pilot Study
              </Link>
              <Link
                href="/applications"
                className="inline-flex items-center justify-center font-semibold text-emerald-600 hover:text-emerald-800"
              >
                View typical TES applications →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
