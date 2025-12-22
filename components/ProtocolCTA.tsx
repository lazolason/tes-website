import Link from "next/link";

interface ProtocolCTAProps {
  title: string;
  description: string;
  topic: string;
  buttonLabel?: string;
}

export default function ProtocolCTA({
  title,
  description,
  topic,
  buttonLabel = "Request pack",
}: ProtocolCTAProps) {
  const href = `/contact?topic=${encodeURIComponent(topic)}`;

  return (
    <div className="rounded-lg border bg-gray-50 p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
