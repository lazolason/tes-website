import { Industry, Stat, Testimonial, ProcessStep, CaseStudy } from '@/types';
import { NavIcons } from '@/components/icons/NavIcons';

export const INDUSTRIES_DATA: Industry[] = [
    {
        id: 'power-energy',
        title: 'Power & Energy',
        slug: 'power-energy',
        description: 'Optimize condenser performance in coal, gas, and nuclear power stations through advanced surface treatment.',
        image: '/industry-power.webp',
        icon: NavIcons.Power,
        benefits: ['Restore MW output losses', 'Reduce specific fuel consumption', 'Extend condenser life'],
    },
    {
        id: 'mining',
        title: 'Mining & Minerals',
        slug: 'mining',
        description: 'Ensure operational continuity by protecting critical cooling loops from biofouling and corrosion.',
        image: '/industry-mining.webp',
        icon: NavIcons.Mining,
        benefits: ['Reduce downtime', 'Minimize chemical load', 'Protect process heat exchangers'],
    },
    {
        id: 'refineries',
        title: 'Refineries',
        slug: 'refineries',
        description: 'Maintain thermal efficiency in complex heat exchanger networks and mitigate under-deposit corrosion.',
        image: '/industry-refinery.webp',
        icon: NavIcons.Refineries,
        benefits: ['Improve energy efficiency', 'Safety & reliability', 'Reduce maintenance cleaning'],
    },
    {
        id: 'food-beverage',
        title: 'Food & Beverage',
        slug: 'food-beverage',
        description: 'Non-toxic, FDA-aligned cooling water solutions for breweries, laundries, and processing plants.',
        image: '/food-beverage.webp',
        icon: NavIcons.Food,
        benefits: ['Safe for food environments', 'Effective bio-control', 'Reduce water consumption'],
    },
    {
        id: 'sugar-ethanol',
        title: 'Sugar & Ethanol',
        slug: 'sugar-ethanol',
        description: 'Recover thermal capacity in evaporator effects and pan houses while reducing downtime.',
        image: '/industrial-plant.webp',
        icon: NavIcons.Agriculture,
        benefits: ['Evaporator efficiency', 'Scale inhibition', 'Reduce boil-out frequency'],
    },
    {
        id: 'agriculture',
        title: 'Agriculture',
        slug: 'agriculture',
        description: 'Protect irrigation infrastructure and pumps from fouling driven by organic-rich water sources.',
        image: '/industry-agriculture.webp',
        icon: NavIcons.Agriculture,
        benefits: ['Protect pumps & nozzles', 'Maintain flow rates', 'Reduce bio-deposits'],
    },
    {
        id: 'data-centres',
        title: 'HVAC & Data Centres',
        slug: 'hvac-data-centers',
        description: 'High-uptime cooling solutions to improve PUE (Power Usage Effectiveness) and cooling reliability.',
        image: '/industry-data-centre.webp',
        icon: NavIcons.Data,
        benefits: ['Reduce energy costs', 'Reliability of uptime', 'Sustainable chemistry'],
    },
    {
        id: 'ports',
        title: 'Ports & Harbours',
        slug: 'ports',
        description: 'Manage aggressive marine growth and seawater corrosion on critical coastal infrastructure.',
        image: '/industry-ports.webp',
        icon: NavIcons.Ports,
        benefits: ['Marine anti-fouling', 'Corrosion inhibition', 'Asset longevity'],
    },
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
        detail: 'Audit-ready reporting using RT&D-aligned baseline vs. intervention methodology.',
    },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        id: 't1',
        quote: "The visibility TES provides into our condenser performance transformed how we approach maintenance. We see the efficiency gains in real-time.",
        author: "Technical Director",
        role: "Station Chemistry & Performance",
        company: "Major Power Utility",
    },
    {
        id: 't2',
        quote: "Moving from traditional biocides to the TES approach reduced our chemical load while actually improving our heat exchanger uptime.",
        author: "Plant Manager",
        role: "Industrial Processing",
        company: "Mining & Minerals Corp",
    },
];

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'kriel-condenser',
        title: 'Kriel Power Station: Condenser Efficiency Recovery',
        slug: 'kriel',
        industry: 'Power Generation',
        client: 'Eskom',
        challenge: 'High biofouling levels and under-deposit corrosion resulting in 3-5 MW loss per unit.',
        solution: 'Implementation of the TES System with Mexel®432 pulsed dosing and continuous M&V.',
        results: [
            '4.2 MW recovered on average per unit',
            'Vacuum stabilized within ±0.1 kPa of design',
            'Significantly reduced manual cleaning frequency',
        ],
        image: '/industry-power.webp',
    },
];
