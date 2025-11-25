export default function Footer() {
  return (
    <footer className="p-4 border-t border-gray-200 dark:border-gray-700 mt-10">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Mexel Energy Sustain. All rights reserved.
      </div>
    </footer>
  )
}
