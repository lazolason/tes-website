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

            {/* Enquiry form that opens email */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Send an enquiry
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Fill in the details below. When you click send, your email client will
                open with a pre-filled message ready to send.
              </p>

              <form
                className="mt-5 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
                  const org = (form.elements.namedItem('organisation') as HTMLInputElement)?.value || '';
                  const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
                  const interest = (form.elements.namedItem('interest') as HTMLSelectElement)?.value || '';
                  const description = (form.elements.namedItem('description') as HTMLTextAreaElement)?.value || '';
                  
                  const subject = encodeURIComponent(`TES Enquiry: ${interest || 'General'}`);
                  const body = encodeURIComponent(
                    `Name: ${name}\nOrganisation / Site: ${org}\nEmail: ${email}\nArea of interest: ${interest}\n\nDescription:\n${description}`
                  );
                  
                  window.location.href = `mailto:lazola@mexelenergysustain.com?subject=${subject}&body=${body}`;
                }}
              >
                <div>
                  <label className="block text-xs font-semibold text-gray-800">
                    Name <span className="text-gray-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800">
                    Organisation / Site
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="e.g. Matla Power Station, Kriel, mine, refinery"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800">
                    Your email <span className="text-gray-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800">
                    Area of interest
                  </label>
                  <select 
                    name="interest"
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  >
                    <option value="">Select one…</option>
                    <option value="TES pilot at Eskom wet-cooled station">
                      TES pilot at Eskom wet-cooled station
                    </option>
                    <option value="TES pilot at industrial cooling-water site">
                      TES pilot at industrial cooling-water site
                    </option>
                    <option value="Mexel®432 for cooling-water">
                      Mexel®432 for cooling-water
                    </option>
                    <option value="MexSteam 100 for boiler / steam-side">
                      MexSteam 100 for boiler / steam-side
                    </option>
                    <option value="Other / general enquiry">Other / not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-800">
                    Brief description
                  </label>
                  <textarea
                    name="description"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    rows={4}
                    placeholder="Brief description of your cooling-water or boiler context, constraints and what you would like to explore."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Open in email client
                </button>
              </form>

              <div className="mt-4 rounded-md bg-sky-50 p-3">
                <p className="text-xs text-sky-800">
                  <span className="font-semibold">Prefer to email directly?</span>{" "}
                  Send to{" "}
                  <a
                    href="mailto:lazola@mexelenergysustain.com"
                    className="font-semibold underline hover:text-sky-900"
                  >
                    lazola@mexelenergysustain.com
                  </a>
                </p>
              </div>
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
