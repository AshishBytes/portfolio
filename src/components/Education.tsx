import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import Section from './shared/Section';
import Card from './shared/Card';

const Education: React.FC = () => {
  const edu = {
    institution: 'Amity University Madhya Pradesh',
    degree: 'B.Tech. Computer Science & Engineering',
    gpa: 'CGPA 7.37/10 (top 15%)',
    period: 'Aug 2022 – May 2026',
    location: 'Gwalior, India',
    coursework:
      'Distributed Systems, Machine Learning, Computer Networks, Operating Systems, Database Systems, Compiler Design',
  };

  return (
    <Section id="education" title="Education" background="white">
      <Card delay={0} className="flex flex-col sm:flex-row items-start gap-6">
        <div className="flex-shrink-0 text-blue-600">
          <GraduationCap className="w-10 h-10" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
          <p className="text-gray-700 font-semibold mb-1">{edu.institution}</p>
          <p className="text-sm text-gray-500 mb-3">{edu.gpa}</p>
          <div className="flex flex-wrap text-sm text-gray-500 mb-3 gap-4">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {edu.period}
            </span>
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {edu.location}
            </span>
          </div>
          <p className="text-gray-600 text-sm">{edu.coursework}</p>
        </div>
      </Card>
    </Section>
  );
};

export default Education;
