// components/CoolingSchematic.tsx
"use client";

export default function CoolingSchematic() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-lg border bg-white sm:h-48 md:h-40">
      <svg
        viewBox="0 0 260 120"
        className="h-full w-full text-gray-700"
        role="img"
        aria-labelledby="cooling-diagram-title"
      >
        <title id="cooling-diagram-title">
          Simplified wet-cooled unit cooling-water schematic with TES dosing point
        </title>

        {/* Section labels */}
        <text x="10" y="15" fontSize="8" fill="#4b5563">
          Cooling tower
        </text>
        <text x="110" y="15" fontSize="8" fill="#4b5563">
          Condenser
        </text>
        <text x="195" y="15" fontSize="8" fill="#4b5563">
          Turbine / generator
        </text>

        {/* Cooling tower */}
        <polygon
          points="20,25 50,25 45,80 25,80"
          fill="#e5f3ff"
          stroke="#0ea5e9"
          strokeWidth="1"
        />
        {/* Drift plume */}
        <path
          d="M 30 20 C 25 10, 40 5, 35 0"
          stroke="#9ca3af"
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
          fill="#eef2ff"
          stroke="#4f46e5"
          strokeWidth="1"
        />
        <text x="125" y="55" fontSize="7" textAnchor="middle" fill="#4b5563">
          Condenser
        </text>

        {/* Turbine block */}
        <rect
          x="185"
          y="35"
          width="45"
          height="30"
          rx="4"
          fill="#fef3c7"
          stroke="#f59e0b"
          strokeWidth="1"
        />
        <text x="207.5" y="53" fontSize="7" textAnchor="middle" fill="#4b5563">
          Turbine
        </text>

        {/* Cooling-water loop */}
        {/* Tower → condenser (cold) */}
        <path
          d="M 50 55 H 95"
          stroke="#0ea5e9"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-cold)"
        />
        {/* Condenser → tower (hot) */}
        <path
          d="M 100 70 H 55"
          stroke="#f97316"
          strokeWidth="2"
          fill="none"
          markerEnd="url(#arrow-hot)"
        />

        {/* Steam path (turbine → condenser) */}
        <path
          d="M 185 50 H 150"
          stroke="#9ca3af"
          strokeDasharray="3 3"
          strokeWidth="1.4"
          fill="none"
          markerEnd="url(#arrow-steam)"
        />

        {/* Mexel dosing point */}
        <circle cx="75" cy="55" r="5" fill="#0ea5e9" opacity="0.15" />
        <circle cx="75" cy="55" r="3" fill="#0ea5e9" />
        <text x="75" y="44" fontSize="7" textAnchor="middle" fill="#0ea5e9">
          TES
        </text>

        {/* Legend */}
        <g transform="translate(10,90)">
          {/* Cold leg */}
          <line
            x1="0"
            y1="0"
            x2="18"
            y2="0"
            stroke="#0ea5e9"
            strokeWidth="2"
          />
          <text x="22" y="3" fontSize="7" fill="#4b5563">
            Cold return to condenser
          </text>

          {/* Hot leg */}
          <line
            x1="0"
            y1="12"
            x2="18"
            y2="12"
            stroke="#f97316"
            strokeWidth="2"
          />
          <text x="22" y="15" fontSize="7" fill="#4b5563">
            Hot back to tower
          </text>

          {/* Steam */}
          <line
            x1="0"
            y1="24"
            x2="18"
            y2="24"
            stroke="#9ca3af"
            strokeWidth="1.4"
            strokeDasharray="3 3"
          />
          <text x="22" y="27" fontSize="7" fill="#4b5563">
            Steam to condenser
          </text>
        </g>

        {/* TES label under diagram */}
        <text
          x="190"
          y="104"
          fontSize="7"
          textAnchor="middle"
          fill="#0ea5e9"
        >
          TES = Mexel®432 + dosing + data
        </text>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrow-cold"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 z" fill="#0ea5e9" />
          </marker>
          <marker
            id="arrow-hot"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 z" fill="#f97316" />
          </marker>
          <marker
            id="arrow-steam"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 z" fill="#9ca3af" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
