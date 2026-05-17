'use client';

/**
 * PageTransition
 * Wraps page content with a subtle fade-up entrance animation.
 * Uses a keyed div so Next.js re-mounts (and re-animates) on every route change.
 * The animation is defined in globals.css (.animate-page-enter) and respects
 * prefers-reduced-motion.
 */

import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="animate-page-enter">
      {children}
    </div>
  );
}
