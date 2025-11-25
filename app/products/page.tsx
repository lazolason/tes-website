export default function ProductsPage() {
  return (
    <section className="py-10 container mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Mexel 432</h2>
          <p>Surfactant technology that keeps condensers clean and hydrophobic for maximum heat transfer.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">MexSteam 100</h2>
          <p>Advanced boiler additive that prevents scaling and fouling, improving steam quality and efficiency.</p>
        </div>
      </div>
    </section>
  )
}
