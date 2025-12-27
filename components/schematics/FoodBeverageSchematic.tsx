// components/schematics/FoodBeverageSchematic.tsx
"use client";

export default function FoodBeverageSchematic() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-lg border border-slate-200 bg-white sm:h-48 md:h-40">
      <svg
        viewBox="0 0 260 120"
        className="h-full w-full text-slate-700"
        role="img"
        aria-labelledby="food-beverage-diagram-title"
      >
        <title id="food-beverage-diagram-title">
          Food and beverage cooling schematic with pasteurizer, plate exchanger, and TES dosing point
        </title>

        {/* Section labels */}
        <text x="10" y="15" fontSize="8" fill="#64748b">
          Pasteurizer
        </text>
        <text x="95" y="15" fontSize="8" fill="#64748b">
          Plate exchanger
        </text>
        <text x="185" y="15" fontSize="8" fill="#64748b">
          Sanitary loop
        </text>

        {/* Pasteurizer / chiller */}
        <rect x="10" y="30" width="60" height="30" rx="4" fill="#f8fafc" stroke="#64748b" />
        <path d="M18 42 H 62" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
        <text x="40" y="49" fontSize="7" textAnchor="middle" fill="#475569">
          Chiller
        </text>

        {/* Plate heat exchanger */}
        <rect x="90" y="28" width="60" height="34" rx="4" fill="#f8fafc" stroke="#64748b" />
        <line x1="98" y1="34" x2="142" y2="34" stroke="#94a3b8" strokeWidth="1" />
        <line x1="98" y1="40" x2="142" y2="40" stroke="#94a3b8" strokeWidth="1" />
        <line x1="98" y1="46" x2="142" y2="46" stroke="#94a3b8" strokeWidth="1" />
        <line x1="98" y1="52" x2="142" y2="52" stroke="#94a3b8" strokeWidth="1" />

        {/* Sanitary cooling system */}
        <rect x="180" y="30" width="60" height="30" rx="6" fill="#f8fafc" stroke="#64748b" />
        <path d="M188 38 H 232" stroke="#94a3b8" strokeWidth="1" />
        <path d="M188 46 H 232" stroke="#94a3b8" strokeWidth="1" />
        <text x="210" y="58" fontSize="7" textAnchor="middle" fill="#475569">
          Sanitary
        </text>

        {/* Cooling-water loop */}
        <path
          d="M 70 45 H 90"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 150 45 H 180"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        <path
          d="M 240 55 H 30"
          stroke="#64748b"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main-slate)"
        />

        {/* TES dosing point */}
        <circle cx="80" cy="45" r="5" fill="#10b981" opacity="0.15" />
        <circle cx="80" cy="45" r="3" fill="#10b981" />
        <text x="80" y="34" fontSize="7" textAnchor="middle" fill="#10b981">
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
            Sanitary return
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
