"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Mexel Energy Sustain.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-700">
            We prefer focused technical conversations over generic marketing. If you are
            responsible for cooling-water or boiler systems at an Eskom station or
            industrial plant, we are happy to discuss whether TES, Mexel®432 or
            MexSteam 100 make sense for your site.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            {/* Direct contact */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Direct contact
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                For technical discussions, pilot concepts or documentation requests,
                please contact Lazola Sonqishe directly.
              </p>
              <div className="rounded-lg border bg-gray-50 p-4 text-sm text-gray-800">
                <p className="font-semibold text-gray-900">Mexel Energy Sustain (Pty) Ltd</p>
                <p className="mt-1">Managing Director: Lazola Sonqishe</p>
                <p className="mt-2">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:lazola@mexelenergysustain.com"
                    className="text-sky-700 hover:text-sky-900"
                  >
                    lazola@mexelenergysustain.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Mobile:</span>{" "}
                  <a
                    href="tel:+27794648298"
                    className="text-sky-700 hover:text-sky-900"
                  >
                    +27 79 464 8298
                  </a>
                </p>
                <p className="mt-2">
                  <span className="font-semibold">General enquiries:</span>{" "}
                  <a
                    href="mailto:info@mexelenergysustain.com"
                    className="text-sky-700 hover:text-sky-900"
                  >
                    info@mexelenergysustain.com
                  </a>
                </p>
              </div>

              <div className="text-xs text-gray-600">
                <p>
                  If you would like us to align with an internal protocol (RT&amp;D,
                  WRC, corporate engineering, etc.), please mention that in your
                  message so we can prepare appropriately.
                </p>
              </div>
            </div>

            {/* Simple enquiry form (placeholder) */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Send an enquiry
              </h2>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                This form is a starting point. It does not submit to any backend yet,
                but can be wired to email or an API when you are ready. For now, you
                can also copy these details into an email to{" "}
                <span className="font-semibold">lazola@mexelenergysustain.com</span>.
              </p>

              <form
                className="mt-4 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "This form is a placeholder. Please email lazola@mexelenergysustain.com directly."
                  );
                }}
              >
                <div>
                  <label className="block text-xs font-semibold text-gray-800">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border px-3 py-2 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800">
                    Organisation / Site
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border px-3 py-2 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="e.g. Matla Power Station, Kriel, mine, refinery"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border px-3 py-2 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800">
                    Area of interest
                  </label>
                  <select className="mt-1 w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500">
                    <option value="">Select one…</option>
                    <option value="tes-eskom">
                      TES pilot at Eskom wet-cooled station
                    </option>
                    <option value="tes-industry">
                      TES pilot at industrial cooling-water site
                    </option>
                    <option value="mexel432">
                      Mexel®432 for cooling-water
                    </option>
                    <option value="mexsteam100">
                      MexSteam 100 for boiler / steam-side
                    </option>
                    <option value="other">Other / not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800">
                    Brief description
                  </label>
                  <textarea
                    className="mt-1 w-full rounded-md border px-3 py-2 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    rows={4}
                    placeholder="Brief description of your cooling-water or boiler context, constraints and what you would like to explore."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Placeholder – email instead for now
                </button>
              </form>

              <p className="mt-3 text-[11px] text-gray-500">
                When you are ready, this form can be wired to send enquiries directly
                to your email or CRM. For now, it serves as a structured prompt for
                the information that helps us respond intelligently.
              </p>
            </div>
          </div>

          <div className="mt-10 text-xs text-gray-600">
            <p>
              If you have already received documentation (TES Master Evidence Pack,
              RT&amp;D protocol, JET correspondence, etc.), you can reference those
              documents by name in your message so we keep the conversation aligned.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
