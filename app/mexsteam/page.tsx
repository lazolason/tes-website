export default function MexsteamPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            MexSteam 100
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Boiler-side efficiency and protection
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700">
            MexSteam 100 is a cutting-edge boiler treatment that reduces scaling, corrosion
            and fouling inside steam generators. It keeps tubes clean, improves heat
            transfer and boosts overall plant efficiency.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <div className="prose prose-slate max-w-none">
            <h2>Industries &amp; Entry Points</h2>
            <p>
              Designed for power stations, petrochemical plants and other heavy industries,
              MexSteam 100 can be integrated with minimal downtime, providing immediate
              efficiency gains.
            </p>
            <h2>Strategy: The Fastest Non-SOE Wins</h2>
            <p>
              Early adopters outside state-owned enterprises gain a first-mover advantage
              by improving efficiency and capturing carbon credits ahead of competitors.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
