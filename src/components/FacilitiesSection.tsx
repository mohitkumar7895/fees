import React from 'react';
import {
  Trees,
  Music,
  Palette,
  Bus,
  Sandwich,
  Backpack,
} from 'lucide-react';

const facilities = [
  {
    icon: Trees,
    title: 'Play Ground',
    desc: 'A playground is a place where kids can play. Typically, they have playthings for kids to use, like slides, swings, and seesaws.',
  },
  {
    icon: Music,
    title: 'Music and Dance',
    desc: 'Dance is also called the hidden language of the soul as we use it to express ourselves when words fall short.',
  },
  {
    icon: Palette,
    title: 'Arts and Crafts',
    desc: "Arts and crafts describes a wide variety of activities involving making things with one's own hands. Arts and crafts is usually a hobby.",
  },
  {
    icon: Bus,
    title: 'Safe Transportation',
    desc: 'Buses are the better options for long and short-term travel. On the other hand, vans and buses are the methods of safe transportation.',
  },
  {
    icon: Sandwich,
    title: 'Healthy food',
    desc: 'A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases.',
  },
  {
    icon: Backpack,
    title: 'Educational Tour',
    desc: 'Are those didactic resources that are in charge of the teaching-learning process of students and allow them to increase certain cognitive and social skills.',
  },
];

export const FacilitiesSection: React.FC = () => {
  return (
    <div className="pt-10 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="flex items-start bg-gray-50/90 shadow-sm border-t-4 border-school-primary rounded-xl p-7 hover:shadow-md transition-shadow"
              >
                <div className="mr-5 text-school-primary shrink-0">
                  <Icon className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-school-secondary mb-2">
                    {fac.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
