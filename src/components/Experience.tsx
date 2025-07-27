import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Users, Search } from 'lucide-react';
import Section from './shared/Section';
import resume from '../data/resume.json';

const Experience: React.FC = () => {
  const experiences = (resume.experience as any[]).map((exp) => ({
    company: exp.company,
    role: exp.role,
    duration: exp.date,
    location: exp.location,
    icon: <TrendingUp className="w-6 h-6" />,
    achievements: exp.responsibilities,
    technologies: [],
  }));

  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="Building impactful solutions across different domains"
      background="gray"
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="timeline-line">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
              } md:w-1/2`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-6 ${
                  index % 2 === 0 ? 'md:-left-6' : 'md:-right-6'
                } left-4 md:left-auto w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white z-10`}
              >
                {exp.icon}
              </div>

              {/* Experience Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 ml-12 md:ml-0 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="text-sm text-gray-500 mt-2 sm:mt-0">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
