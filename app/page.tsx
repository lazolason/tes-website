export default function HomePage() {
  return (
    <section className="py-12 space-y-8">
      <h1 className="text-4xl font-bold">Mexel Energy Sustain</h1>
      <p className="text-xl">Thermal Efficiency Solutions (TES) that combine chemistry, IoT, data and verification to deliver unprecedented efficiency.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Efficiency. Data. Deployment.</h2>
          <p>
            Our TES platform enhances heat exchange performance through innovative surfactant technology (Mexel 432) and steam generation optimisation (MexSteam 100), all monitored and verified by cutting‑edge IoT and data analytics.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Products Overview</h2>
          <ul className="list-disc list-inside">
            <li><strong>Mexel 432:</strong> Keeps condensers and cooling systems pristine for maximum efficiency.</li>
            <li><strong>MexSteam 100:</strong> Advanced boiler treatment for cleaner, more efficient steam generation.</li>
          </ul>
        </div>
      </div>
      <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Contact us
      </a>
    </section>
  );
}
