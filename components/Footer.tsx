import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1 text-xs text-gray-700">
            <p className="font-semibold text-gray-900">
              Mexel Energy Sustain (Pty) Ltd
            </p>
            <p>Cooling-water efficiency using Mexel®432 – TES for wet-cooled units.</p>
            <p className="text-[11px] text-gray-500">
              VAT: 4550274700 &nbsp;|&nbsp; Email:{" "}
              <a
                href="mailto:info@mexelenergysustain.com"
                className="text-sky-700 hover:text-sky-900"
              >
                info@mexelenergysustain.com
              </a>
            </p>
          </div>

          <div className="flex flex-col items-start gap-1 text-[11px] text-gray-600 md:items-end">
            <p>
              Direct technical contact:&nbsp;
              <a
                href="mailto:lazola@mexelenergysustain.com"
                className="font-semibold text-sky-700 hover:text-sky-900"
              >
                lazola@mexelenergysustain.com
              </a>{" "}
              &nbsp;|&nbsp;{" "}
              <a
                href="tel:+27794648298"
                className="font-semibold text-sky-700 hover:text-sky-900"
              >
                +27 79 464 8298
              </a>
            </p>
            <p>
              <span className="text-gray-400">© {year}</span>{" "}
              <span>Mexel Energy Sustain (Pty) Ltd. All rights reserved.</span>
            </p>
            <p className="text-[10px] text-gray-400">
              This site is for technical and informational use. It does not replace
              station-specific protocols, safety procedures or engineering judgement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
