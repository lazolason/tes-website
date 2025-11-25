import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tes", label: "TES System" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Mexel Energy Sustain"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <span className="sr-only">Mexel Energy Sustain</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-4 text-xs font-semibold text-gray-700 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-2 py-1 hover:bg-sky-50 hover:text-sky-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
