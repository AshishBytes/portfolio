import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Users } from 'lucide-react';
import Section from './shared/Section';
import Card from './shared/Card';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Distributed Systems",
      description: "Expert in building scalable, high-performance distributed systems with focus on reliability and efficiency."
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Backend Development",
      description: "Proficient in designing robust backend architectures using modern technologies and best practices."
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: "Cloud Technologies",
      description: "Experienced with AWS, Azure, and GCP for deploying and managing cloud-native applications."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Team Leadership",
      description: "Strong leadership and mentorship skills with experience in agile development methodologies."
    }
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Passionate about building systems that scale and solve real-world problems"
      background="gray"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              I'm a final-year B.Tech Computer Science student with a passion for distributed systems 
              and backend development. My journey in software engineering has been marked by hands-on 
              experience with Amazon-scale projects and a deep understanding of system design principles.
            </p>
            
            <p className="text-gray-700 mb-6">
              Throughout my academic and professional journey, I've developed expertise in building 
              scalable systems, optimizing performance, and leading development teams. My experience 
              spans from improving system latencies by significant margins to impacting millions of users 
              through innovative solutions.
            </p>
            
            <p className="text-gray-700 mb-8">
              I'm actively seeking opportunities in top-tier software engineering roles where I can 
              contribute to building the next generation of distributed systems and continue growing 
              as a technical leader.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'System Design', 'Performance Optimization', 'Team Leadership'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Highlights Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={highlight.title} delay={index * 0.1}>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;