import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Firoz Khan',
    role: '(Director)',
    subject: 'Math/Science teacher',
    image: '/img/team31.jpg',
  },
  {
    name: 'Nazma khan',
    role: '(Principal)',
    subject: 'S.S.T Teacher',
    image: '/img/team22.jpg',
  },
  {
    name: 'Faim Sir',
    role: '(Vice Principal)',
    subject: 'English Teacher',
    image: '/img/team11.jpg',
  },
  {
    name: 'Saurabh jain',
    role: '',
    subject: 'Computer teacher',
    image: '/img/team44.jpg',
  },
  {
    name: 'Divya Raghuvanshi',
    role: '',
    subject: 'Mother Teacher PG class',
    image: '/img/team55.jpg',
  },
  {
    name: 'Shakeel Sir',
    role: '',
    subject: 'English speaking Teacher',
    image: '/img/team66.jpg',
  },
  {
    name: 'Nikita Tiwari',
    role: '',
    subject: 'Hindi teacher',
    image: '/img/team77.jpg',
  },
  {
    name: 'Mitali Gupta',
    role: '',
    subject: 'Moral values/ G.K. teacher',
    image: '/img/team88.jpg',
  },
];

interface TeachersSectionProps {
  limit?: number;
  showAllLink?: boolean;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({ limit }) => {
  const displayed = limit ? teamMembers.slice(0, limit) : teamMembers;

  return (
    <div className="pt-12 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-6">
          <p className="section-title px-5 mb-2">
            <span>Our Teachers</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-school-secondary mb-4">
            Meet Our Teachers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {displayed.map((member, idx) => (
            <div key={idx} className="text-center flex flex-col items-center mb-8">
              <div className="relative w-44 h-44 rounded-full overflow-hidden shadow-md mb-4 border-4 border-school-primaryLight">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
              <h4 className="text-2xl font-bold text-school-secondary mb-1">
                {member.name}
              </h4>
              <i className="text-sm text-gray-500 block">
                {member.role && (
                  <>
                    {member.role} <br />
                  </>
                )}
                {member.subject}
              </i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
