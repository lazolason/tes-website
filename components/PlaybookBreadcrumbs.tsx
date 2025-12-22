"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const labelMap: Record<string, string> = {
  "/knowledge-hub": "Knowledge Hub",
  "/knowledge-hub/engineering-playbook": "Engineering Playbook",
  "/knowledge-hub/engineering-playbook/fundamentals": "Fundamentals",
  "/knowledge-hub/engineering-playbook/protocol": "Protocol (Overview)",
  "/knowledge-hub/engineering-playbook/iot-dosing": "IoT Dosing (Overview)",
  "/knowledge-hub/engineering-playbook/station-readiness": "Station Readiness & Limits",
  "/knowledge-hub/engineering-playbook/troubleshooting": "Troubleshooting",
  "/knowledge-hub/engineering-playbook/safety-compliance": "Safety & Compliance",
};

export default function PlaybookBreadcrumbs() {
  const pathname = usePathname() || "";
  const segments = pathname.split("/").filter(Boolean);

  const crumbs: { href: string; label: string }[] = [];
  let currentPath = "";

  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label = labelMap[currentPath];
    if (label) {
      crumbs.push({ href: currentPath, label });
    }
  }

  if (crumbs.length === 0) {
    return null;
  }

  return (
    <nav className="text-xs text-gray-500" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              <Link
                href={crumb.href}
                className={
                  isLast
                    ? "font-semibold text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }
                aria-current={isLast ? "page" : undefined}
              >
                {crumb.label}
              </Link>
              {!isLast ? <span className="text-gray-300">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
