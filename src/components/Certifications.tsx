import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, Trophy, Star } from 'lucide-react';
import Section from './shared/Section';
import Card from './shared/Card';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Microsoft Learn: Azure Fundamentals",
      issuer: "Microsoft",
      code: "AZ-900",
      date: "Sep 2025",
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      description: "Validated knowledge of core Azure services and governance.",
      color: "blue",
    },
    {
      title: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      code: "GCDL",
      date: "Mar 2025",
      icon: <Star className="w-8 h-8 text-green-600" />,
      description: "Demonstrated broad understanding of cloud capabilities.",
      color: "green",
    },
    {
      title: "Google Kick Start Round B",
      issuer: "Google",
      code: "Top 0.8%",
      date: "2024",
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      description: "Global rank 432 in Google's coding challenge.",
      color: "yellow",
    },
    {
      title: "HackIITK 2025 Runner-up",
      issuer: "IIT Kanpur",
      code: "Blockchain Track",
      date: "2025",
      icon: <Award className="w-8 h-8 text-purple-600" />,
      description: "Recognised for reliability innovation at HackIITK.",
      color: "purple",
    },
    {
      title: "Blue Prism Foundation Developer",
      issuer: "Blue Prism",
      code: "BPD",
      date: "Oct 2023",
      icon: <Award className="w-8 h-8 text-orange-600" />,
      description: "Certified in fundamental RPA development skills.",
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      yellow: "from-yellow-500 to-yellow-600",
      orange: "from-orange-500 to-orange-600",
      purple: "from-purple-500 to-purple-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <Section
      id="certifications"
      title="Certifications & Awards"
      subtitle="Professional certifications and recognitions"
      background="gray"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <Card key={cert.title} delay={index * 0.1}>
            <div className="text-center">
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${getColorClasses(cert.color)} flex items-center justify-center text-white`}>
                {cert.icon}
              </div>

              {/* Certification Details */}
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {cert.title}
              </h3>
              
              <p className="text-blue-600 font-semibold mb-1">
                {cert.issuer}
              </p>
              
              <p className="text-sm text-gray-500 mb-3">
                {cert.code} • {cert.date}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.02 }}
            />
          </Card>
        ))}
      </div>

      {/* Additional Stats */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">2</div>
            <div className="text-gray-600">Cloud Platforms</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
            <div className="text-gray-600">Competition Win</div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Certifications;