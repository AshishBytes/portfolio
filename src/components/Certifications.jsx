import { motion } from 'framer-motion';
import { Award, Cloud, Trophy, Star } from 'lucide-react';
import Section from './shared/Section.jsx';
import Card from './shared/Card.jsx';

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      code: "AZ-900",
      date: "2023",
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      description: "Comprehensive understanding of Azure cloud services, pricing, and support models.",
      color: "blue"
    },
    {
      title: "Google Cloud Leader",
      issuer: "Google Cloud",
      code: "GCL-2023",
      date: "2023",
      icon: <Star className="w-8 h-8 text-green-600" />,
      description: "Recognition for leadership in cloud computing and community contributions.",
      color: "green"
    },
    {
      title: "Kick Start 2024",
      issuer: "Google",
      code: "KS-2024",
      date: "2024",
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      description: "Top performer in Google's competitive programming challenge.",
      color: "yellow"
    },
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      code: "SAA-C03",
      date: "2023",
      icon: <Award className="w-8 h-8 text-orange-600" />,
      description: "Expertise in designing distributed systems on AWS platform.",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      yellow: "from-yellow-500 to-yellow-600",
      orange: "from-orange-500 to-orange-600"
    };
    return colorMap[color] || colorMap.blue;
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