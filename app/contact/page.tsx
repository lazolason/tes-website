export default function ContactPage() {
  return (
    <section className="py-10 container mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>We’d love to hear from you. Send us a message and we’ll get back to you as soon as possible.</p>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Your name" />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full p-2 border rounded" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea className="w-full p-2 border rounded" rows={5} placeholder="How can we help?" />
        </div>
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Send
        </button>
      </form>
      <p className="text-sm mt-4">
        Alternatively, email us at <a href="mailto:info@mexel.co.za" className="text-blue-600">info@mexel.co.za</a>.
      </p>
    </section>
  )
}
