import { ChartColumn, Wind, Droplets, Gauge, ShieldCheck } from 'lucide-react';

export const solutions = [
    {
        category: "Core Product",
        items: [
            { name: 'Mexel®432', href: '/mexel432', desc: 'Film-forming emulsion for online condenser tube cleaning.', icon: Droplets },
        ]
    },
    {
        category: "Industries",
        items: [
            { name: 'Power & Energy', href: '/industries/power-energy', desc: 'Vacuum recovery & heat rate optimization.', icon: Gauge },
            { name: 'Mining & Smelters', href: '/industries/mining', desc: 'Process cooling continuity solutions.', icon: ChartColumn },
            { name: 'HVAC & Data Centers', href: '/industries/hvac-data-centers', desc: 'Efficiency & risk mitigation.', icon: Wind },
        ]
    },
    {
        category: "Technical Solutions",
        items: [
            { name: 'Condenser Efficiency', href: '/applications', desc: 'Optimize heat transfer rates.', icon: Gauge },
            { name: 'Cooling Tower Preservation', href: '/applications', desc: 'Extend asset lifespan.', icon: ShieldCheck },
        ]
    },
    {
        category: "Knowledge Hub",
        items: [
            { name: 'Case Studies', href: '/knowledge-hub/case-studies', desc: 'Real-world performance verification.', icon: ChartColumn },
            { name: 'Engineering Playbook', href: '/knowledge-hub/engineering-playbook', desc: 'Technical protocols & standards.', icon: Droplets },
        ]
    }
];
