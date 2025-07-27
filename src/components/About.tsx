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
      description:
        "Built and optimized services handling over one million monthly users."
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Performance Tuning",
      description: "Reduced service latency by 35% through low-level profiling."
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: "DevOps & Cloud",
      description:
        "Experienced with Azure AKS, GKE, Docker and Terraform deployments."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Mentorship",
      description: "Led small engineering teams and promoted best practices."
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
              Final-year B.Tech. CS student (graduating May 2026) with over four
              years of experience building distributed systems and developer
              tooling in C, C++ and Python.
            </p>

            <p className="text-gray-700 mb-8">
              Delivered applications serving more than one million monthly
              users, cut service latency by 35% and led key system
              optimisations. Strong foundation in algorithms, operating
              systems and networking. Excited to craft fault‑tolerant
              solutions at scale.
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