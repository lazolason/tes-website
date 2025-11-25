export default function LegalPage() {
  return (
    <section className="py-10 container mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Legal</h1>
      <p>
        This website is provided for informational purposes only. © {new Date().getFullYear()} Mexel Energy Sustain. All
        rights reserved.
      </p>
      <p>
        Use of this site constitutes acceptance of our privacy policy and terms of service. Content may not be reproduced
        without permission.
      </p>
    </section>
  )
}
