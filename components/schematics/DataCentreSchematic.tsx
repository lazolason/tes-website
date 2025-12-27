// components/schematics/DataCentreSchematic.tsx
"use client";

export default function DataCentreSchematic() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-lg border border-slate-200 bg-white sm:h-48 md:h-40">
      <svg
        viewBox="0 0 260 120"
        className="h-full w-full text-slate-700"
        role="img"
        aria-labelledby="data-centre-diagram-title"
      >
        <title id="data-centre-diagram-title">
          Data centre cooling schematic with server racks, CRAC units, chiller, and TES dosing point
        </title>

        {/* Section labels */}
        <text x="10" y="15" fontSize="8" fill="#64748b">
          Server racks
        </text>
        <text x="95" y="15" fontSize="8" fill="#64748b">
          CRAC/CRAH
        </text>
        <text x="175" y="15" fontSize="8" fill="#64748b">
          Chiller
        </text>

        {/* Server racks */}
        <rect x="10" y="28" width="50" height="40" rx="3" fill="#f8fafc" stroke="#64748b" />
        <line x1="18" y1="36" x2="52" y2="36" stroke="#94a3b8" strokeWidth="1" />
        <line x1="18" y1="44" x2="52" y2="44" stroke="#94a3b8" strokeWidth="1" />
        <line x1="18" y1="52" x2="52" y2="52" stroke="#94a3b8" strokeWidth="1" />
        <text x="35" y="74" fontSize="7" textAnchor="middle" fill="#475569">
          Hot/cold aisle
        </text>

        {/* CRAC/CRAH */}
        <rect x="90" y="30" width="50" height="30" rx="4" fill="#f8fafc" stroke="#64748b" />
        <circle cx="105" cy="45" r="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="125" cy="45" r="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />

        {/* Chiller */}
        <rect x="170" y="30" width="60" height="30" rx="4" fill="#f8fafc" stroke="#64748b" />
        <rect x="178" y="38" width="16" height="14" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        <rect x="202" y="38" width="16" height="14" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />

        {/* Chilled water loop */}
        <path
          d="M 60 44 H 90"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 140 44 H 170"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 230 56 H 20"
          stroke="#64748b"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main-slate)"
        />

        {/* TES dosing point */}
        <circle cx="80" cy="44" r="5" fill="#10b981" opacity="0.15" />
        <circle cx="80" cy="44" r="3" fill="#10b981" />
        <text x="80" y="33" fontSize="7" textAnchor="middle" fill="#10b981">
          TES
        </text>

        {/* Legend */}
        <g transform="translate(10,98)">
          <line x1="0" y1="0" x2="18" y2="0" stroke="#10b981" strokeWidth="2" />
          <text x="22" y="3" fontSize="7" fill="#475569">
            Chilled-water supply
          </text>

          <line x1="0" y1="12" x2="18" y2="12" stroke="#64748b" strokeWidth="2" />
          <text x="22" y="15" fontSize="7" fill="#475569">
            Return to chiller
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
