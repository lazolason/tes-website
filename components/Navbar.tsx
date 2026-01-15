"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// DEFINING ICONS INLINE TO PREVENT IMPORT ERRORS
const Icons = {
  ChevronDown: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  ),
  Menu: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
  ),
  Close: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
  ),
  Power: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
    </svg>
  ),
  Mining: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 8.625a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM15.375 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
    </svg>
  )
};

const navItems = [
  { href: "/", label: "Home" },
  {
    href: "/tes",
    label: "Solutions",
    type: "dropdown",
    items: [
      { href: "/tes", label: "TES System Overview" },
      { href: "/mexel432", label: "Mexel®432 Product" },
      { href: "/products", label: "Technical Specs" },
      { href: "/applications", label: "Applications" },
    ]
  },
  {
    href: "/industries",
    label: "Industries",
    type: "mega",
    items: [
      // HARDCODED FILTER: Only Power and Mining are listed here.
      { href: "/industries/power-energy", label: "Power & Energy", icon: Icons.Power, desc: "Improve condenser performance." },
      { href: "/industries/mining", label: "Mining & Minerals", icon: Icons.Mining, desc: "Critical cooling for operations." },
    ]
  },
  {
    href: "/knowledge-hub",
    label: "Knowledge Hub",
    type: "dropdown",
    items: [
      { href: "/knowledge-hub", label: "Methodology" },
      { href: "/knowledge-hub/case-studies", label: "Case Studies" },
      { href: "/knowledge-hub/resources", label: "Resources" },
    ]
  },
  { href: "/contact", label: "Contact Engineering", cta: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredItem(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center pl-2 lg:pl-0">
          <div className="relative h-16 w-56 flex-shrink-0">
            {/* Logo Image */}
            <Image
              src="/logo.png"
              alt="Mexel Energy Sustain logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <Link
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors focus-ring flex items-center gap-1 ${item.cta
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 cta-pulse"
                  : isActive(item.href)
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                aria-haspopup={item.items ? "true" : undefined}
                aria-expanded={item.items && hoveredItem === item.label ? "true" : "false"}
              >
                {item.label}
                {item.items && !item.cta && (
                  <Icons.ChevronDown className="w-3 h-3 text-slate-500" />
                )}
              </Link>

              {/* Mega Menu / Dropdown Logic */}
              {hoveredItem === item.label && item.items && (
                <div
                  className={`absolute top-full pt-2 ${item.type === 'mega' ? 'left-1/2 -translate-x-1/2 w-[600px] max-w-[90vw]' : 'left-0 w-56'
                    }`}
                  role="menu"
                  aria-label={`${item.label} submenu`}
                >
                  <div className="bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden ring-1 ring-black/5 p-1 dropdown-enter">
                    {item.type === 'mega' ? (
                      <div className="grid grid-cols-2 gap-2 p-2">
                        {item.items.map((subItem: any) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group focus-ring"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                              {subItem.icon && <subItem.icon className="w-4 h-4" />}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900">{subItem.label}</div>
                              {subItem.desc && (
                                <div className="text-xs text-slate-600 mt-0.5 line-clamp-1">{subItem.desc}</div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        {item.items.map((subItem: any) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus-ring rounded-md"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md focus-ring"
        >
          <span className="sr-only">Open menu</span>
          {mobileOpen ? (
            <Icons.Close className="w-6 h-6" />
          ) : (
            <Icons.Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white dropdown-enter">
          <nav className="flex flex-col p-4 space-y-1" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => !item.items && setMobileOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 text-base font-medium rounded-md focus-ring ${item.cta
                    ? "bg-emerald-600 text-white text-center mt-4 justify-center"
                    : isActive(item.href)
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-900 hover:bg-slate-50"
                    }`}
                  aria-haspopup={item.items ? "true" : undefined}
                  aria-expanded={item.items ? "true" : undefined}
                >
                  <span>{item.label}</span>
                  {item.items && !item.cta && (
                    <Icons.ChevronDown className="w-4 h-4 text-slate-500" />
                  )}
                </Link>
                {item.items && (
                  <div className="pl-6 space-y-1 mt-1 border-l-2 border-slate-200 ml-3" role="menu" aria-label={`${item.label} submenu`}>
                    {item.items.map((subItem: any) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-slate-600 hover:text-emerald-700 rounded-md focus-ring"
                        role="menuitem"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
