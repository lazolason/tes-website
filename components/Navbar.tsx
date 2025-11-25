import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tes", label: "TES System" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          {/* Logo placeholder – replace with <Image> if you want actual logo here */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-700 text-xs font-bold text-white">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">
              Mexel Energy Sustain
            </span>
            <span className="text-[11px] text-gray-500">
              Thermal Efficiency Solution (TES)
            </span>
          </div>
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
