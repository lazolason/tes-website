import { Industry, Stat, Testimonial, ProcessStep, CaseStudy } from '@/types';
import { NavIcons } from '@/components/icons/NavIcons';

// SPECIALIST STRATEGY: Power, Mining, and Critical Infrastructure only.
// Food, Agriculture, and light manufacturing have been removed to focus on high-load engineering.
export const INDUSTRIES_DATA: Industry[] = [
    {
        id: "power-energy",
        title: "Power Generation",
        slug: "power-energy",
        description: "Restoring design-point vacuum and thermal efficiency in 500MW+ wet-cooled units. Focused on condenser cleanliness and biological fouling control.",
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
        description: "High-efficiency cooling for data centres and large-scale commercial HVAC. Focusing on Legionella compliance and energy reduction.",
        image: "/schematics/data-centre-v2.webp?v=4",
        icon: NavIcons.Data,
        benefits: ["PUE Reduction", "Risk Management", "Water Savings"],
    }
];

export const STATS_DATA: Stat[] = [
    {
        id: 'mw-recovered',
        value: 50,
        suffix: 'MW+',
        label: 'Annual Capacity Recovered',
        description: 'Recovered across industrial and utility basins.',
    },
    {
        id: 'efficiency-gain',
        value: 15,
        suffix: '%',
        label: 'Average Efficiency Gain',
        description: 'Verified improvement in heat rate and vacuum.',
    },
    {
        id: 'dosing-accuracy',
        value: 99,
        suffix: '%',
        label: 'Dosing Accuracy',
        description: 'Pulsed dosing events tracked via IoT cloud.',
    },
    {
        id: 'carbon-reduction',
        value: 120,
        suffix: 'k Tons',
        label: 'CO2 Avoided',
        description: 'Reduced emissions via improved heat rate.',
    },
];

export const PROCESS_STEPS: ProcessStep[] = [
    {
        number: '01',
        title: 'Surface Chemistry',
        subtitle: 'Mexel®432 Application',
        detail: 'Non-oxidising emulsion forms a protective film on wetted surfaces to prevent deposition.',
    },
    {
        number: '02',
        title: 'Precision Dosing',
        subtitle: 'IoT-Enabled Skids',
        detail: 'Automated 20-minute daily dosing with localized monitoring and traceability.',
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
        detail: 'Audit-ready reporting validated via ASME PTC 12.2.',
    },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        id: "t1",
        quote: "The vacuum recovery on Unit 4 was measurable within 48 hours of the intervention. A critical win for our summer load profile.",
        author: "Station Manager",
        role: "Utility Power Gen",
        company: "Major Power Utility",
    },
    {
        id: "t2",
        quote: "We reduced manual cleaning frequency on the furnace cooling circuit from weekly to quarterly.",
        author: "Engineering Superintendent",
        role: "Platinum Smelter",
        company: "Mining & Minerals Corp",
    }
];

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'kriel-condenser',
        title: 'Kriel Power Station: Mexel®432 Results',
        slug: 'kriel',
        industry: 'Power Generation',
        client: 'Mexel Energy Sustain',
        challenge: 'High biofouling levels and under-deposit corrosion resulting in 3-5 MW loss per unit.',
        solution: 'Implementation of the TES System with Mexel®432 pulsed dosing and continuous M&V. Chemistry supplied by Mexel International (France).',
        results: [
            '4.2 MW recovered on average per unit',
            'Vacuum stabilized within ±0.1 kPa of design',
            'Significantly reduced manual cleaning frequency',
        ],
        image: '/power-energy-v2.webp?v=4',
    },
];
