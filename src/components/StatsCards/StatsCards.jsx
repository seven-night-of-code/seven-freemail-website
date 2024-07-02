import React from 'react';

const stats = [
  {
    icon: '/image/Frame 10.png',
    title: '10k',
    subtitle: 'Developers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam inventore labore dolorem rem molestias ipsam, repellat accusantium consectetur, odit enim perspiciatis ex fuga ea numquam architecto quibusdam aliquam quaerat. Ducimus?',
  },
  {
    icon: '/image/Frame 10 (1).png',
    title: '4K',
    subtitle: 'Agencies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam inventore labore dolorem rem molestias ipsam, repellat accusantium consectetur, odit enim perspiciatis ex fuga ea numquam architecto quibusdam aliquam quaerat. Ducimus?',
  },
  {
    icon: '/image/Frame 10 (2).png',
    title: '80k+',
    subtitle: 'Users',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam inventore labore dolorem rem molestias ipsam, repellat accusantium consectetur, odit enim perspiciatis ex fuga ea numquam architecto quibusdam aliquam quaerat. Ducimus?',
  },
];

function StatsCards() {
  return (
    <div className="bg-[#0a0a23] py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-center gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-custom-green p-6 w-full md:w-1/3">
            <div className="flex items-center mb-4">
              <img src={stat.icon} alt={stat.subtitle} className="h-10 mr-4" />
              <div>
                <h3 className="text-2xl font-bold">{stat.title}</h3>
                <p className="text-lg">{stat.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsCards;
