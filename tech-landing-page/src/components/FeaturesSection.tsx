import React from 'react';
import { CheckCircleIcon, DevicePhoneMobileIcon, GlobeAltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    id: 1,
    name: 'High Performance',
    description: 'Our products are optimized for speed and efficiency.',
    icon: <GlobeAltIcon className="w-12 h-12 text-yellow-500" />,
  },
  {
    id: 2,
    name: 'Mobile Friendly',
    description: 'Fully responsive and accessible on all devices.',
    icon: <DevicePhoneMobileIcon className="w-12 h-12 text-yellow-500" />,
  },
  {
    id: 3,
    name: 'Secure & Reliable',
    description: 'Robust security features to protect your data.',
    icon: <ShieldCheckIcon className="w-12 h-12 text-yellow-500" />,
  },
  {
    id: 4,
    name: '24/7 Support',
    description: 'We offer round-the-clock support to assist you.',
    icon: <CheckCircleIcon className="w-12 h-12 text-yellow-500" />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="bg-primary p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl text-white font-semibold mt-4 mb-2">{feature.name}</h3>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

