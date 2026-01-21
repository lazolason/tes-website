import React from 'react';

interface ProcessStepsProps {
  variant?: 'tes-system' | 'default';
}

export default function ProcessSteps({ variant = 'default' }: ProcessStepsProps) {
  const steps = [
    {
      number: '1',
      title: 'Baseline Period',
      description: 'Establish stable operating conditions and collect baseline performance data.',
    },
    {
      number: '2',
      title: 'Intervention',
      description: 'Apply TES treatment protocol and monitor system response.',
    },
    {
      number: '3',
      title: 'Verification',
      description: 'Measure performance improvements and validate results.',
    },
    {
      number: '4',
      title: 'Review',
      description: 'Independent engineering review and final reporting.',
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="relative rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-lg font-bold text-white">
            {step.number}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
