import { Industry, ProcessStep } from '@/types';
import { NavIcons } from '@/components/icons/NavIcons';

// SPECIALIST STRATEGY: Power, Mining, and Critical Infrastructure only.
// Food, Agriculture, and light manufacturing have been removed to focus on high-load engineering.
export const INDUSTRIES_DATA: Industry[] = [
    {
        id: "power-energy",
        title: "Power Generation",
        slug: "power-energy",
        description: "Reviewing condenser vacuum and thermal efficiency in 500MW+ wet-cooled units. Focused on condenser cleanliness and biological fouling control.",
        image: "/power-energy-v2.webp?v=4",
        icon: NavIcons.Power,
        benefits: ["Vacuum Recovery", "Heat Rate Improvement", "Compliance"],
    },
    {
        id: "mining",
        title: "Mining & Minerals",
        slug: "mining",
        description: "Critical cooling for smelter furnaces, compressors, and underground refrigeration. Managing high-solids and process-contaminated water loops.",
        image: "/mining-v2.webp?v=4",
        icon: NavIcons.Mining,
        benefits: ["Production Continuity", "Maintenance Reduction", "Asset Life"],
    },
    {
        id: "hvac",
        title: "Data Centres & HVAC",
        slug: "hvac-data-centers",
        description: "Cooling-water review for data centres and large-scale commercial HVAC. Focused on hygiene compliance, operations and energy performance.",
        image: "/schematics/data-centre-v2.webp?v=4",
        icon: NavIcons.Data,
        benefits: ["Efficiency Review", "Risk Management", "Water Savings"],
    }
];

export const PROCESS_STEPS: ProcessStep[] = [
    {
        number: '01',
        title: 'Surface Chemistry',
        subtitle: 'Mexel®432 Application',
        detail: 'Non-oxidising emulsion forms a protective film on wetted surfaces to help reduce deposition risk.',
    },
    {
        number: '02',
        title: 'Precision Dosing',
        subtitle: 'IoT-Enabled Skids',
        detail: 'Configurable pulsed dosing with localized monitoring and traceability.',
    },
    {
        number: '03',
        title: 'Thermal Monitoring',
        subtitle: 'Performance Tracking',
        detail: 'Continuous tracking of TR, TTD, and Condenser Vacuum via live data feeds.',
    },
    {
        number: '04',
        title: 'M&V Protocol',
        subtitle: 'Verified Results',
        detail: 'Structured heat-rate review using ASME PTC 12.2 (TTD/TR methodology) where data quality supports it. Fuel or CO₂ impact is treated as a derived, site-specific calculation.',
    },
];
