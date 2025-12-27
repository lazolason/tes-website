// components/schematics/AgricultureSchematic.tsx
"use client";

export default function AgricultureSchematic() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-lg border border-slate-200 bg-white sm:h-48 md:h-40">
      <svg
        viewBox="0 0 260 120"
        className="h-full w-full text-slate-700"
        role="img"
        aria-labelledby="agriculture-diagram-title"
      >
        <title id="agriculture-diagram-title">
          Agriculture cooling schematic with greenhouse, evaporative cooler, and TES dosing point
        </title>

        {/* Section labels */}
        <text x="10" y="15" fontSize="8" fill="#64748b">
          Greenhouse
        </text>
        <text x="100" y="15" fontSize="8" fill="#64748b">
          Evaporative cooler
        </text>
        <text x="185" y="15" fontSize="8" fill="#64748b">
          Water reservoir
        </text>

        {/* Greenhouse */}
        <polygon points="10,60 40,30 70,60" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
        <rect x="14" y="60" width="52" height="22" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
        <line x1="25" y1="64" x2="25" y2="80" stroke="#94a3b8" strokeWidth="1" />
        <line x1="40" y1="64" x2="40" y2="80" stroke="#94a3b8" strokeWidth="1" />
        <line x1="55" y1="64" x2="55" y2="80" stroke="#94a3b8" strokeWidth="1" />

        {/* Evaporative cooler */}
        <rect x="95" y="34" width="55" height="26" rx="4" fill="#f8fafc" stroke="#64748b" />
        <line x1="102" y1="40" x2="148" y2="40" stroke="#94a3b8" strokeWidth="1" />
        <line x1="102" y1="46" x2="148" y2="46" stroke="#94a3b8" strokeWidth="1" />
        <line x1="102" y1="52" x2="148" y2="52" stroke="#94a3b8" strokeWidth="1" />

        {/* Water reservoir */}
        <ellipse cx="210" cy="70" rx="28" ry="10" fill="#f8fafc" stroke="#94a3b8" />
        <path d="M190 70 C 198 64, 205 76, 218 70" stroke="#94a3b8" strokeWidth="1" fill="none" />
        <text x="176" y="88" fontSize="7" fill="#64748b">
          Irrigation
        </text>

        {/* Cooling-water loop */}
        <path
          d="M 70 64 H 95"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 150 46 H 182"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 182 72 H 45"
          stroke="#64748b"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main-slate)"
        />

        {/* TES dosing point */}
        <circle cx="85" cy="64" r="5" fill="#10b981" opacity="0.15" />
        <circle cx="85" cy="64" r="3" fill="#10b981" />
        <text x="85" y="53" fontSize="7" textAnchor="middle" fill="#10b981">
          TES
        </text>

        {/* Legend */}
        <g transform="translate(10,98)">
          <line x1="0" y1="0" x2="18" y2="0" stroke="#10b981" strokeWidth="2" />
          <text x="22" y="3" fontSize="7" fill="#475569">
            Cooling-water supply
          </text>

          <line x1="0" y1="12" x2="18" y2="12" stroke="#64748b" strokeWidth="2" />
          <text x="22" y="15" fontSize="7" fill="#475569">
            Return + irrigation
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
