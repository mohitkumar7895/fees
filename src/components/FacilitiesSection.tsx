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
    color: 'border-teal-500',
    iconBg: 'bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white',
  },
  {
    icon: Music,
    title: 'Music and Dance',
    desc: 'Dance is also called the hidden language of the soul as we use it to express ourselves when words fall short.',
    color: 'border-amber-400',
    iconBg: 'bg-amber-50 text-amber-600 group-hover:bg-amber-400 group-hover:text-gray-900',
  },
  {
    icon: Palette,
    title: 'Arts and Crafts',
    desc: "Arts and crafts describes a wide variety of activities involving making things with one's own hands. Arts and crafts is usually a hobby.",
    color: 'border-rose-500',
    iconBg: 'bg-rose-50 text-rose-600 group-hover:bg-rose-500 group-hover:text-white',
  },
  {
    icon: Bus,
    title: 'Safe Transportation',
    desc: 'Buses are the better options for long and short-term travel. On the other hand, vans and buses are the methods of safe transportation.',
    color: 'border-blue-500',
    iconBg: 'bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white',
  },
  {
    icon: Sandwich,
    title: 'Healthy food',
    desc: 'A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases.',
    color: 'border-emerald-500',
    iconBg: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white',
  },
  {
    icon: Backpack,
    title: 'Educational Tour',
    desc: 'Are those didactic resources that are in charge of the teaching-learning process of students and allow them to increase certain cognitive and social skills.',
    color: 'border-purple-500',
    iconBg: 'bg-purple-50 text-purple-600 group-hover:bg-purple-500 group-hover:text-white',
  },
];

export const FacilitiesSection: React.FC = () => {
  return (
    <section className="pt-12 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className={`group flex items-start bg-gray-50/90 shadow-sm border-t-4 ${fac.color} rounded-2xl p-7 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-x border-b border-gray-100/80`}
              >
                <div className={`mr-5 p-3 rounded-2xl shrink-0 transition-all duration-300 ${fac.iconBg}`}>
                  <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-school-secondary mb-2 group-hover:text-school-primary transition-colors font-heading">
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
    </section>
  );
};
