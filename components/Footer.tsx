import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            {/* Logo mark */}
            <Image
              src="/logo.png"
              alt="Mexel Energy Sustain"
              width={100}
              height={32}
              className="h-8 w-auto opacity-90"
            />
            <p className="text-sm font-semibold tracking-tight text-gray-900">
              Mexel Energy Sustain (Pty) Ltd
            </p>
            <p className="text-caption text-gray-600">Cooling-water efficiency using Mexel®432 – TES for wet-cooled units.</p>
            <p className="text-xs text-gray-500">
              VAT: 4550274700
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 text-xs text-gray-600 md:items-end md:text-right">
            <div className="space-y-1">
              <p className="font-medium text-gray-700">Technical contact</p>
              <p>
                <a
                  href="mailto:lazola@mexelenergysustain.com"
                  className="font-semibold text-sky-700 hover:text-sky-900"
                >
                  lazola@mexelenergysustain.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+27794648298"
                  className="font-semibold text-sky-700 hover:text-sky-900"
                >
                  +27 79 464 8298
                </a>
              </p>
            </div>
            <div className="space-y-1 text-[11px] text-gray-500">
              <p>© {year} Mexel Energy Sustain (Pty) Ltd. All rights reserved.</p>
              <p className="max-w-xs">
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
