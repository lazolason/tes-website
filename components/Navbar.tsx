import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">Mexel Energy Sustain</span>
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/tes">TES</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/applications">Applications</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
