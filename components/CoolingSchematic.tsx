// components/CoolingSchematic.tsx
"use client";

export default function CoolingSchematic() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-lg border border-slate-200 bg-white sm:h-48 md:h-40">
      <svg
        viewBox="0 0 260 120"
        className="h-full w-full text-slate-700"
        role="img"
        aria-labelledby="cooling-diagram-title"
      >
        <title id="cooling-diagram-title">
          Simplified wet-cooled unit cooling-water schematic with TES dosing point
        </title>

        {/* Section labels */}
        <text x="10" y="15" fontSize="8" fill="#64748b">
          Cooling tower
        </text>
        <text x="110" y="15" fontSize="8" fill="#64748b">
          Condenser
        </text>
        <text x="195" y="15" fontSize="8" fill="#64748b">
          Turbine / generator
        </text>

        {/* Cooling tower */}
        <polygon
          points="20,25 50,25 45,80 25,80"
          fill="#f8fafc"
          stroke="#94a3b8"
          strokeWidth="1"
        />
        {/* Drift plume */}
        <path
          d="M 30 20 C 25 10, 40 5, 35 0"
          stroke="#94a3b8"
          strokeWidth="1"
          fill="none"
        />

        {/* Condenser box */}
        <rect
          x="100"
          y="30"
          width="50"
          height="40"
          rx="4"
          fill="#f8fafc"
          stroke="#64748b"
          strokeWidth="1"
        />
        <text x="125" y="55" fontSize="7" textAnchor="middle" fill="#475569">
          Condenser
        </text>

        {/* Turbine block */}
        <rect
          x="185"
          y="35"
          width="45"
          height="30"
          rx="4"
          fill="#f8fafc"
          stroke="#64748b"
          strokeWidth="1"
        />
        <text x="207.5" y="53" fontSize="7" textAnchor="middle" fill="#475569">
          Turbine
        </text>

        {/* Cooling-water loop */}
        {/* Tower → condenser */}
        <path
          d="M 50 55 H 95"
          stroke="#10b981"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main)"
        />
        {/* Condenser → tower */}
        <path
          d="M 100 70 H 55"
          stroke="#64748b"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-main-slate)"
        />

        {/* Steam path (turbine → condenser) */}
        <path
          d="M 185 50 H 150"
          stroke="#94a3b8"
          strokeDasharray="3 3"
          strokeWidth="1.4"
          fill="none"
          markerEnd="url(#arrow-steam)"
        />

        {/* Mexel dosing point */}
        <circle cx="75" cy="55" r="5" fill="#10b981" opacity="0.15" />
        <circle cx="75" cy="55" r="3" fill="#10b981" />
        <text x="75" y="44" fontSize="7" textAnchor="middle" fill="#10b981">
          TES
        </text>

        {/* Legend */}
        <g transform="translate(10,90)">
          {/* Main leg */}
          <line x1="0" y1="0" x2="18" y2="0" stroke="#10b981" strokeWidth="2" />
          <text x="22" y="3" fontSize="7" fill="#475569">
            Cooling-water loop
          </text>

          {/* Return */}
          <line x1="0" y1="12" x2="18" y2="12" stroke="#64748b" strokeWidth="2" />
          <text x="22" y="15" fontSize="7" fill="#475569">
            Return to tower
          </text>

          {/* Steam */}
          <line
            x1="0"
            y1="24"
            x2="18"
            y2="24"
            stroke="#94a3b8"
            strokeWidth="1.4"
            strokeDasharray="3 3"
          />
          <text x="22" y="27" fontSize="7" fill="#475569">
            Steam to condenser
          </text>
        </g>

        {/* TES label under diagram */}
        <text x="190" y="104" fontSize="7" textAnchor="middle" fill="#10b981">
          TES = Mexel®432 + dosing + data
        </text>

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
          <marker id="arrow-steam" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="#94a3b8" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
