import React from 'react';
import { motion } from 'framer-motion';
import { Code, Wrench, Brain, Users } from 'lucide-react';
import Section from './shared/Section';
import Card from './shared/Card';
import resume from '../data/resume.json';

const Skills: React.FC = () => {
  const categories = {
    Languages: [] as string[],
    Tools: [] as string[],
    'AI/ML': [] as string[],
    DevOps: [] as string[],
    'Soft Skills': [] as string[],
  };

  (resume.core_skills as string[]).forEach((line) => {
    const [cat, list] = line.split(':');
    if (!list) return;
    const items = list.split(',').map((s) => s.trim());
    if (/Languages/i.test(cat)) categories.Languages.push(...items);
    else if (/DevOps/i.test(cat)) categories.DevOps.push(...items);
    else if (/ML/i.test(cat)) categories['AI/ML'].push(...items);
    else if (/Soft Skills/i.test(cat)) categories['Soft Skills'].push(...items);
    else categories.Tools.push(...items);
  });

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'Languages',
      skills: categories.Languages,
      color: 'blue',
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-600" />,
      title: 'Tools & Technologies',
      skills: categories.Tools,
      color: 'green',
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: 'AI/ML',
      skills: categories['AI/ML'],
      color: 'purple',
    },
    {
      icon: <Wrench className="w-8 h-8 text-indigo-600" />,
      title: 'DevOps',
      skills: categories.DevOps,
      color: 'purple',
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: 'Soft Skills',
      skills: categories['Soft Skills'],
      color: 'orange',
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 text-blue-700 border-blue-200',
      green: 'bg-green-50 text-green-700 border-green-200',
      purple: 'bg-purple-50 text-purple-700 border-purple-200',
      orange: 'bg-orange-50 text-orange-700 border-orange-200',
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <Section
      id="skills"
      title="Skills & Expertise"
      subtitle="Technologies and tools I use to build amazing software"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={category.title} delay={index * 0.1} className="skill-card">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category.title}
              </h3>
            </div>

            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium text-center ${getColorClasses(category.color)}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1 + skillIndex * 0.05,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
