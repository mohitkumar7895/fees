import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';

const teamMembers = [
  {
    name: 'Firoz Khan',
    role: '(Director)',
    subject: 'Math & Science Mentor',
    image: '/img/team31.jpg',
  },
  {
    name: 'Nazma Khan',
    role: '(Principal)',
    subject: 'Social Studies & Leadership',
    image: '/img/team22.jpg',
  },
  {
    name: 'Faim Sir',
    role: '(Vice Principal)',
    subject: 'English & Communication',
    image: '/img/team11.jpg',
  },
  {
    name: 'Saurabh Jain',
    role: '',
    subject: 'Computer & IT Trainer',
    image: '/img/team44.jpg',
  },
  {
    name: 'Divya Raghuvanshi',
    role: '',
    subject: 'Early Child Mother Teacher (PG)',
    image: '/img/team55.jpg',
  },
  {
    name: 'Shakeel Sir',
    role: '',
    subject: 'Spoken English Specialist',
    image: '/img/team66.jpg',
  },
  {
    name: 'Nikita Tiwari',
    role: '',
    subject: 'Hindi & Creative Writing',
    image: '/img/team77.jpg',
  },
  {
    name: 'Mitali Gupta',
    role: '',
    subject: 'Moral Values & General Knowledge',
    image: '/img/team88.jpg',
  },
];

interface TeachersSectionProps {
  limit?: number;
  showAllLink?: boolean;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({ limit, showAllLink = true }) => {
  const displayed = limit ? teamMembers.slice(0, limit) : teamMembers;

  return (
    <section className="pt-16 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-8 space-y-2">
          <p className="section-title px-5 mb-2">
            <span>Our Faculty</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-school-secondary font-heading">
            Meet Our Teachers
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Passionate educators and caring child mentors dedicated to guiding every student towards academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayed.map((member, idx) => (
            <div
              key={idx}
              className="group text-center flex flex-col items-center bg-gray-50/70 hover:bg-white rounded-3xl p-6 border border-gray-100/90 shadow-xs hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-lg mb-4 border-4 border-school-primaryLight group-hover:border-school-primary transition-colors duration-300 ring-4 ring-transparent group-hover:ring-teal-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="180px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              <h4 className="text-2xl font-bold text-school-secondary group-hover:text-school-primary transition-colors font-heading mb-1">
                {member.name}
              </h4>

              <div className="text-sm text-gray-500 space-y-0.5">
                {member.role && (
                  <span className="inline-block text-xs font-extrabold text-school-primary uppercase tracking-wider bg-teal-50 px-2.5 py-0.5 rounded-full mb-1">
                    {member.role}
                  </span>
                )}
                <p className="text-xs font-medium text-gray-600">
                  {member.subject}
                </p>
              </div>
            </div>
          ))}
        </div>

        {showAllLink && limit && limit < teamMembers.length && (
          <div className="text-center pt-8">
            <Link
              href="/teachers"
              className="inline-flex items-center gap-2 bg-school-secondary hover:bg-school-secondaryDark text-white font-extrabold py-3 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm uppercase tracking-wider"
            >
              <span>View All Teachers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
