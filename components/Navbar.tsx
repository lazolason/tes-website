"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tes", label: "TES System" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { 
    href: "/industries", 
    label: "Industries",
    dropdown: [
      { href: "/industries/power-energy", label: "Power & Energy" },
      { href: "/industries/mining", label: "Mining & Minerals" },
      { href: "/industries/refineries", label: "Refineries & Petrochemical" },
      { href: "/industries/food-beverage", label: "Food & Beverage" },
      { href: "/industries/agriculture", label: "Agriculture & Irrigation" },
      { href: "/industries/data-centres", label: "Data Centres" },
      { href: "/industries/ports", label: "Sea / Harbours / Ports" },
    ]
  },
  { 
    href: "/knowledge-hub", 
    label: "Knowledge Hub",
    dropdown: [
      { href: "/knowledge-hub", label: "Methodology & FAQ" },
      { href: "/knowledge-hub/case-studies", label: "Case Studies" },
      { href: "/knowledge-hub/resources", label: "Resources" },
    ]
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:py-4">
        {/* Brand with logo + name + tagline */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Mexel Energy Sustain logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold tracking-tight text-gray-900">
              Mexel Energy Sustain
            </span>
            <span className="text-[11px] text-gray-500">
              Thermal Efficiency Solution (TES)
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-[13px] font-medium text-gray-700 md:flex">
          {navItems.map((item) => (
            item.dropdown ? (
              <div 
                key={item.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 transition-colors hover:bg-brand-50 hover:text-brand-800"
                >
                  {item.label}
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {dropdownOpen === item.label && (
                  <div className="absolute left-0 top-full mt-1 w-56 rounded-md border bg-white py-2 shadow-lg">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-800"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 transition-colors hover:bg-brand-50 hover:text-brand-800"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav className="border-t bg-white px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-800"
                  >
                    {item.label}
                  </Link>
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-md px-3 py-2 text-xs text-gray-600 hover:bg-brand-50 hover:text-brand-800"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-800"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
