// components/schematics/RefinerySchematic.tsx
"use client";

export default function RefinerySchematic() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-lg border border-slate-200 bg-white sm:h-48 md:h-40">
      <svg
        viewBox="0 0 260 120"
        className="h-full w-full text-slate-700"
        role="img"
        aria-labelledby="refinery-diagram-title"
      >
        <title id="refinery-diagram-title">
          Refinery cooling system schematic with distillation column, coolers, and TES dosing point
        </title>

        {/* Section labels */}
        <text x="10" y="15" fontSize="8" fill="#64748b">
          Distillation
        </text>
        <text x="78" y="15" fontSize="8" fill="#64748b">
          Process cooler
        </text>
        <text x="150" y="15" fontSize="8" fill="#64748b">
          Fin-fan coolers
        </text>
        <text x="210" y="15" fontSize="8" fill="#64748b">
          Cooling tower
        </text>

        {/* Distillation column */}
        <rect x="12" y="24" width="24" height="60" rx="3" fill="#f8fafc" stroke="#64748b" />
        <circle cx="24" cy="34" r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="24" cy="46" r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="24" cy="58" r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="24" cy="70" r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />

        {/* Process cooler */}
        <rect x="70" y="32" width="50" height="30" rx="4" fill="#f8fafc" stroke="#64748b" />
        <line x1="78" y1="40" x2="112" y2="40" stroke="#94a3b8" strokeWidth="1" />
        <line x1="78" y1="47" x2="112" y2="47" stroke="#94a3b8" strokeWidth="1" />
        <line x1="78" y1="54" x2="112" y2="54" stroke="#94a3b8" strokeWidth="1" />

        {/* Fin-fan coolers */}
        <rect x="142" y="28" width="50" height="22" rx="3" fill="#f8fafc" stroke="#64748b" />
        <circle cx="156" cy="39" r="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="178" cy="39" r="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        <line x1="156" y1="34" x2="156" y2="44" stroke="#94a3b8" strokeWidth="1" />
        <line x1="151" y1="39" x2="161" y2="39" stroke="#94a3b8" strokeWidth="1" />

        {/* Cooling tower */}
        <polygon points="210,30 238,30 234,82 214,82" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
        <path d="M220 24 C 216 16, 228 12, 224 6" stroke="#94a3b8" strokeWidth="1" fill="none" />

        {/* Cooling-water loop */}
        <path
          d="M 36 52 H 70"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 120 52 H 142"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 192 52 H 210"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 210 72 H 40"
          stroke="#64748b"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main-slate)"
        />

        {/* TES dosing point */}
        <circle cx="96" cy="52" r="5" fill="#10b981" opacity="0.15" />
        <circle cx="96" cy="52" r="3" fill="#10b981" />
        <text x="96" y="41" fontSize="7" textAnchor="middle" fill="#10b981">
          TES
        </text>

        {/* Legend */}
        <g transform="translate(10,98)">
          <line x1="0" y1="0" x2="18" y2="0" stroke="#10b981" strokeWidth="2" />
          <text x="22" y="3" fontSize="7" fill="#475569">
            Process cooling loop
          </text>

          <line x1="0" y1="12" x2="18" y2="12" stroke="#64748b" strokeWidth="2" />
          <text x="22" y="15" fontSize="7" fill="#475569">
            Return to tower
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
