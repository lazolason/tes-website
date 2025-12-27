import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="space-y-6">
            {/* Logo mark */}
            <Image
              src="/logo.webp"
              alt="Mexel Energy Sustain"
              width={140}
              height={44}
              className="h-10 w-auto brightness-0 invert opacity-90"
            />
            <div className="space-y-2">
              <p className="text-sm font-bold tracking-tight text-white">
                Mexel Energy Sustain (Pty) Ltd
              </p>
              <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                Transforming cooling-water systems from hidden bottlenecks into efficiency drivers using Mexel®432 technology.
              </p>
              <p className="text-xs text-slate-500">
                VAT: 4550274700
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 md:items-end md:text-right">
            <div className="space-y-2">
              <p className="text-sm font-bold text-white uppercase tracking-wider">Technical contact</p>
              <p>
                <a
                  href="mailto:info@mexelenergysustain.com"
                  className="text-lg font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  info@mexelenergysustain.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+27794648298"
                  className="text-lg font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  +27 79 464 8298
                </a>
              </p>
            </div>
            <div className="space-y-2 text-[11px] text-slate-500 md:max-w-sm">
              <p>© {year} Mexel Energy Sustain (Pty) Ltd. All rights reserved.</p>
              <p>
                This site is for technical and informational use. It does not replace
                station-specific protocols, safety procedures or engineering judgement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
