import { motion } from 'framer-motion';
import { Code, Wrench, Brain, Users } from 'lucide-react';
import Section from './shared/Section.jsx';
import Card from './shared/Card.jsx';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "Go", "Perl"],
      color: "blue"
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-600" />,
      title: "Tools & Technologies",
      skills: ["Docker", "Azure", "GCP", "Kafka", "Terraform"],
      color: "green"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "ML/NLP",
      skills: ["T5", "PyTorch", "SBERT", "BLEU", "ROUGE"],
      color: "purple"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Soft Skills",
      skills: ["Agile", "Mentorship", "Leadership", "Time Management"],
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      green: "bg-green-50 text-green-700 border-green-200",
      purple: "bg-purple-50 text-purple-700 border-purple-200",
      orange: "bg-orange-50 text-orange-700 border-orange-200"
    };
    return colorMap[color] || colorMap.blue;
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
              <div className="flex justify-center mb-4">
                {category.icon}
              </div>
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
                    delay: (index * 0.1) + (skillIndex * 0.05) 
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