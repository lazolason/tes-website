import Link from "next/link";

interface PlaybookNavLink {
  href: string;
  label: string;
}

interface PlaybookNavigationProps {
  previous?: PlaybookNavLink;
  next?: PlaybookNavLink;
}

export default function PlaybookNavigation({
  previous,
  next,
}: PlaybookNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <div className="mt-12 border-t pt-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {previous ? (
          <Link
            href={previous.href}
            className="text-sm font-semibold text-gray-600 hover:text-gray-900"
          >
            ← {previous.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={next.href}
            className="text-sm font-semibold text-brand-500 hover:text-brand-900"
          >
            {next.label} →
          </Link>
        ) : null}
      </div>
    </div>
  );
}
