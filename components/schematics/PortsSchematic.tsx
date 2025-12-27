// components/schematics/PortsSchematic.tsx
"use client";

export default function PortsSchematic() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-lg border border-slate-200 bg-white sm:h-48 md:h-40">
      <svg
        viewBox="0 0 260 120"
        className="h-full w-full text-slate-700"
        role="img"
        aria-labelledby="ports-diagram-title"
      >
        <title id="ports-diagram-title">
          Port cooling schematic with ship loading equipment, hydraulic coolers, and TES dosing point
        </title>

        {/* Section labels */}
        <text x="10" y="15" fontSize="8" fill="#64748b">
          Ship loading
        </text>
        <text x="95" y="15" fontSize="8" fill="#64748b">
          Hydraulic coolers
        </text>
        <text x="185" y="15" fontSize="8" fill="#64748b">
          Compressor coolers
        </text>

        {/* Ship loading crane */}
        <line x1="20" y1="70" x2="50" y2="30" stroke="#64748b" strokeWidth="2" />
        <line x1="50" y1="30" x2="80" y2="30" stroke="#64748b" strokeWidth="2" />
        <line x1="80" y1="30" x2="90" y2="45" stroke="#64748b" strokeWidth="2" />
        <rect x="20" y="70" width="20" height="12" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />

        {/* Hydraulic coolers */}
        <rect x="90" y="35" width="55" height="26" rx="4" fill="#f8fafc" stroke="#64748b" />
        <line x1="98" y1="41" x2="138" y2="41" stroke="#94a3b8" strokeWidth="1" />
        <line x1="98" y1="47" x2="138" y2="47" stroke="#94a3b8" strokeWidth="1" />
        <line x1="98" y1="53" x2="138" y2="53" stroke="#94a3b8" strokeWidth="1" />

        {/* Compressor coolers */}
        <rect x="170" y="35" width="60" height="26" rx="4" fill="#f8fafc" stroke="#64748b" />
        <circle cx="188" cy="48" r="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="212" cy="48" r="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />

        {/* Seawater indicator */}
        <path d="M20 98 C 30 92, 40 104, 50 98" stroke="#94a3b8" strokeWidth="1" fill="none" />
        <path d="M50 98 C 60 92, 70 104, 80 98" stroke="#94a3b8" strokeWidth="1" fill="none" />
        <text x="18" y="110" fontSize="7" fill="#64748b">
          Seawater intake
        </text>

        {/* Cooling-water loop */}
        <path
          d="M 80 48 H 90"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 145 48 H 170"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 230 58 H 30"
          stroke="#64748b"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main-slate)"
        />

        {/* TES dosing point */}
        <circle cx="98" cy="48" r="5" fill="#10b981" opacity="0.15" />
        <circle cx="98" cy="48" r="3" fill="#10b981" />
        <text x="98" y="37" fontSize="7" textAnchor="middle" fill="#10b981">
          TES
        </text>

        {/* Legend */}
        <g transform="translate(10,90)">
          <line x1="0" y1="0" x2="18" y2="0" stroke="#10b981" strokeWidth="2" />
          <text x="22" y="3" fontSize="7" fill="#475569">
            Equipment cooling loop
          </text>

          <line x1="0" y1="12" x2="18" y2="12" stroke="#64748b" strokeWidth="2" />
          <text x="22" y="15" fontSize="7" fill="#475569">
            Return to seawater
          </text>
        </g>

        {/* Arrow markers */}
        <defs>
          <marker id="arrow-main" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="#10b981" />
          </marker>
          <marker
            id="arrow-main-slate"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 z" fill="#64748b" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
