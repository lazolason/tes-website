"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { IndustryIcons } from "./icons/IndustryIcons";

const navItems = [
  { href: "/", label: "Home" },
  { 
    href: "/tes", 
    label: "Solutions",
    type: "dropdown",
    items: [
      { href: "/tes", label: "TES System" },
      { href: "/products", label: "Products" },
      { href: "/applications", label: "Applications" },
    ]
  },
  {
    href: "/industries",
    label: "Industries",
    type: "mega",
    items: [
      { href: "/industries/power-energy", label: "Power & Energy", icon: IndustryIcons.Power, desc: "Improve condenser performance." },
      { href: "/industries/mining", label: "Mining & Minerals", icon: IndustryIcons.Mining, desc: "Critical cooling for operations." },
      { href: "/industries/refineries", label: "Refineries", icon: IndustryIcons.Refineries, desc: "Corrosion control & efficiency." },
      { href: "/industries/food-beverage", label: "Food & Beverage", icon: IndustryIcons.Food, desc: "Safe, reliable cooling water." },
      { href: "/industries/agriculture", label: "Agriculture", icon: IndustryIcons.Agriculture, desc: "Irrigation & system protection." },
      { href: "/industries/data-centres", label: "Data Centres", icon: IndustryIcons.Data, desc: "High-uptime cooling efficiency." },
      { href: "/industries/ports", label: "Ports & Harbours", icon: IndustryIcons.Ports, desc: "Marine environment solutions." },
    ]
  },
  {
    href: "/knowledge-hub", 
    label: "Knowledge Hub",
    type: "dropdown",
    items: [
      { href: "/knowledge-hub", label: "Methodology & FAQ" },
      { href: "/knowledge-hub/case-studies", label: "Case Studies" },
      { href: "/knowledge-hub/resources", label: "Resources" },
    ]
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Request a Pilot Study", cta: true },
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
             {/* Using object-contain and left alignment to keep it tidy */}
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
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 flex items-center gap-1 ${
                  item.cta
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
                  <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Mega Menu / Dropdown Logic */}
              {hoveredItem === item.label && item.items && (
                <div
                  className={`absolute top-full pt-2 ${
                    item.type === 'mega' ? 'left-1/2 -translate-x-1/2 w-[600px] max-w-[90vw]' : 'left-0 w-56'
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
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                              <subItem.icon className="w-4 h-4" />
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
                            className="px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 rounded-md"
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
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
        >
          <span className="sr-only">Open menu</span>
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
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
                  className={`flex items-center justify-between px-3 py-2 text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 ${
                    item.cta
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
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.items && (
                  <div className="pl-6 space-y-1 mt-1 border-l-2 border-slate-200 ml-3" role="menu" aria-label={`${item.label} submenu`}>
                    {item.items.map((subItem: any) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-slate-600 hover:text-emerald-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
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
