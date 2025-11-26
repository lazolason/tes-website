import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Playbook | Mexel Energy Sustain',
  description: 'TES Playbook: methodology, FAQ, evidence library.',
};

export default function PlaybookPage() {
  return (
    <main className="prose mx-auto px-4 py-8">
      <h1>TES Playbook: Methodology & FAQ</h1>
      <h2>A. Methodology</h2>
      <p><strong>Baseline → Intervention → Review.</strong> Every TES project follows a rigorous three-phase methodology:</p>
      <ul>
        <li><strong>Baseline:</strong> Collect condenser/cooling-water performance data (TR, TTD, vacuum, net coal/MWh) over a defined period.</li>
        <li><strong>Intervention:</strong> Dose Mexel®432 using IoT dosing equipment and monitor cooling-water parameters.</li>
        <li><strong>Review:</strong> Compare pre- and post-intervention performance, quantifying MW recovery, reduced fouling rates and water/chemical savings.</li>
      </ul>
      <p>This approach aligns with Eskom’s RT&D protocol and the WRC verification framework to ensure results are transparent and independently verifiable.</p>
      <h2>B. Engineer FAQ</h2>
      <ul>
        <li><strong>Is Mexel®432 a biocide?</strong> – No; it’s a film-forming emulsified molecule that prevents fouling by making surfaces slippery, reducing biofilm, scale and corrosion.</li>
        <li><strong>Does TES replace existing chemistry?</strong> – TES can work alongside existing programmes; Mexel®432 often allows significant reduction of traditional biocides or scale/corrosion inhibitors.</li>
        <li><strong>How long is a pilot?</strong> – Typical pilots run 8–12 weeks: 3 weeks baseline, 4–6 weeks intervention and 2–3 weeks review.</li>
        <li><strong>What data is required?</strong> – At minimum: condenser inlet/outlet temps, vacuum, flow rates, make-up water quality, dosing logs and plant load.</li>
        <li><strong>What does it cost?</strong> – TES is priced as a service (chemistry + dosing equipment + analytics). Costs depend on unit size and duration; pilots are often funded as proof-of-concept.</li>
        <li><strong>Is Mexel®432 safe for discharge?</strong> – Yes; it meets European and South African environmental regulations and degrades rapidly in water.</li>
      </ul>
      <h2>C. Evidence Library</h2>
      <ul>
        <li><strong>Eskom Case Studies</strong> – Links to Kriel power station and other pilots under RT&D protocol.</li>
        <li><strong>International References</strong> – Summaries of 50 GW+ of global deployments.</li>
        <li><strong>Technical Documentation</strong> – Links to the Mexel®432 data sheet, Lost Megawatts Restored white paper, and the TES Master Evidence Pack (available on request).</li>
      </ul>
      <h2>Industry Coverage</h2>
      <p>TES presently serves wet-cooled coal units, mining & minerals processing, refineries & petrochemical plants, food & beverage & laundries, and the newly added <strong>Agriculture & Irrigation</strong> sector. Each sector has specific fouling/corrosion challenges and typical use cases, and the playbook references the detailed sections on the Industries page.</p>
    </main>
  );
}
