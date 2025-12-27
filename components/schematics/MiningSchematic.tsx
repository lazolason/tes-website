// components/schematics/MiningSchematic.tsx
"use client";

export default function MiningSchematic() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-lg border border-slate-200 bg-white sm:h-48 md:h-40">
      <svg
        viewBox="0 0 260 120"
        className="h-full w-full text-slate-700"
        role="img"
        aria-labelledby="mining-diagram-title"
      >
        <title id="mining-diagram-title">
          Mining cooling circuit schematic with concentrator, mill, and TES dosing point
        </title>

        {/* Section labels */}
        <text x="10" y="15" fontSize="8" fill="#64748b">
          Concentrator
        </text>
        <text x="85" y="15" fontSize="8" fill="#64748b">
          Mill
        </text>
        <text x="150" y="15" fontSize="8" fill="#64748b">
          Heat exchanger
        </text>

        {/* Concentrator */}
        <rect x="10" y="28" width="50" height="28" rx="3" fill="#f8fafc" stroke="#64748b" />
        <line x1="16" y1="34" x2="54" y2="34" stroke="#94a3b8" strokeWidth="1" />
        <line x1="16" y1="40" x2="54" y2="40" stroke="#94a3b8" strokeWidth="1" />

        {/* Mill */}
        <rect x="80" y="30" width="40" height="24" rx="4" fill="#f8fafc" stroke="#64748b" />
        <circle cx="90" cy="42" r="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="110" cy="42" r="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />

        {/* Heat exchanger */}
        <rect x="150" y="28" width="70" height="30" rx="4" fill="#f8fafc" stroke="#64748b" />
        <line x1="158" y1="34" x2="212" y2="34" stroke="#94a3b8" strokeWidth="1" />
        <line x1="158" y1="42" x2="212" y2="42" stroke="#94a3b8" strokeWidth="1" />
        <line x1="158" y1="50" x2="212" y2="50" stroke="#94a3b8" strokeWidth="1" />

        {/* Tailings pond */}
        <ellipse cx="55" cy="88" rx="32" ry="10" fill="#f8fafc" stroke="#94a3b8" />
        <path d="M30 88 C 40 82, 50 94, 60 88" stroke="#94a3b8" strokeWidth="1" fill="none" />
        <text x="18" y="103" fontSize="7" fill="#64748b">
          Tailings interaction
        </text>

        {/* Cooling-water loop */}
        <path
          d="M 60 45 H 78"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 120 45 H 150"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 220 45 V 80 H 90"
          stroke="#64748b"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main-slate)"
        />
        <path
          d="M 90 80 H 40 V 56"
          stroke="#64748b"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main-slate)"
        />

        {/* Open cooling circuit marker */}
        <text x="120" y="86" fontSize="7" fill="#64748b">
          Open cooling circuit
        </text>

        {/* TES dosing point */}
        <circle cx="70" cy="45" r="5" fill="#10b981" opacity="0.15" />
        <circle cx="70" cy="45" r="3" fill="#10b981" />
        <text x="70" y="34" fontSize="7" textAnchor="middle" fill="#10b981">
          TES
        </text>

        {/* Legend */}
        <g transform="translate(10,100)">
          <line x1="0" y1="0" x2="18" y2="0" stroke="#10b981" strokeWidth="2" />
          <text x="22" y="3" fontSize="7" fill="#475569">
            Cooling-water loop
          </text>

          <line x1="0" y1="12" x2="18" y2="12" stroke="#64748b" strokeWidth="2" />
          <text x="22" y="15" fontSize="7" fill="#475569">
            Return to circuit
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
