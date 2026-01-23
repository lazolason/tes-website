import { ChartColumn, Wind, Droplets, Gauge, ShieldCheck } from 'lucide-react';

// Technical Solutions dropdown
export const solutions = [
    { name: 'Condenser Efficiency', href: '/applications#condenser', desc: 'Optimize heat transfer rates.', icon: Gauge },
    { name: 'Cooling Tower Preservation', href: '/applications#cooling-towers', desc: 'Extend asset lifespan.', icon: ShieldCheck },
];

// Industries dropdown
export const industries = [
    { name: 'Power & Energy', href: '/industries/power-energy', desc: 'Vacuum recovery & heat rate optimization.', icon: Gauge },
    { name: 'Mining & Smelters', href: '/industries/mining', desc: 'Process cooling continuity solutions.', icon: ChartColumn },
    { name: 'HVAC & Data Centers', href: '/industries/hvac-data-centers', desc: 'Efficiency & risk mitigation.', icon: Wind },
];

// Knowledge Hub dropdown
export const knowledgeHub = [
    { name: 'Case Studies', href: '/knowledge-hub/case-studies', desc: 'Real-world performance verification.', icon: ChartColumn },
    { name: 'Engineering Playbook', href: '/knowledge-hub/engineering-playbook', desc: 'Technical protocols & standards.', icon: Droplets },
    { name: 'Technical Resources', href: '/knowledge-hub/resources', desc: 'White papers, data sheets & guides.', icon: Gauge },
];
