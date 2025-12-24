"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Icons for the Mega Menu
const Icons = {
  Power: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Mining: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Refineries: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Food: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  Agriculture: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Data: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  Ports: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
};

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
        { href: "/industries/power-energy", label: "Power & Energy", icon: Icons.Power, desc: "Improve condenser performance." },
        { href: "/industries/mining", label: "Mining & Minerals", icon: Icons.Mining, desc: "Critical cooling for operations." },
        { href: "/industries/refineries", label: "Refineries", icon: Icons.Refineries, desc: "Corrosion control & efficiency." },
        { href: "/industries/food-beverage", label: "Food & Beverage", icon: Icons.Food, desc: "Safe, reliable cooling water." },
        { href: "/industries/agriculture", label: "Agriculture", icon: Icons.Agriculture, desc: "Irrigation & system protection." },
        { href: "/industries/data-centres", label: "Data Centres", icon: Icons.Data, desc: "High-uptime cooling efficiency." },
        { href: "/industries/ports", label: "Ports & Harbours", icon: Icons.Ports, desc: "Marine environment solutions." },
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
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  item.cta
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : isActive(item.href)
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>

              {/* Mega Menu / Dropdown Logic */}
              {hoveredItem === item.label && item.items && (
                <div 
                  className={`absolute top-full pt-2 ${
                    item.type === 'mega' ? 'left-1/2 -translate-x-1/2 w-[600px]' : 'left-0 w-56'
                  }`}
                >
                  <div className="bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden ring-1 ring-black/5 p-1">
                    {item.type === 'mega' ? (
                      <div className="grid grid-cols-2 gap-2 p-2">
                        {item.items.map((subItem: any) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                              <subItem.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900">{subItem.label}</div>
                              {subItem.desc && (
                                <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{subItem.desc}</div>
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
                            className="px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
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
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
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
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => !item.items && setMobileOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    item.cta
                      ? "bg-emerald-600 text-white text-center mt-4"
                      : isActive(item.href)
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
                {item.items && (
                  <div className="pl-6 space-y-1 mt-1 border-l-2 border-slate-200 ml-3">
                    {item.items.map((subItem: any) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-slate-600 hover:text-emerald-700 rounded-md"
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
