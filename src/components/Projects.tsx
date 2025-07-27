import React from 'react';
import { ExternalLink, Github, MessageSquare, DollarSign } from 'lucide-react';
import Section from './shared/Section';
import Card from './shared/Card';
import Button from './shared/Button';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'DocQA Tutor',
      description:
        'Summarisation and question answering API built on a fine‑tuned T5 model.',
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      technologies: ['Python', 'T5', 'PyTorch', 'FastAPI'],
      achievements: [
        'Fine‑tuned on 2M samples achieving ROUGE‑L 43.2 and BLEU 27.5',
        'Deployed to AKS GPU pools with HPA; latency reduced 47% via App Insights',
      ],
      githubUrl: 'https://github.com/AshishBytes/docqa-tutor',
      liveUrl: undefined,
      image:
        'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      timeframe: 'Feb 2025 – Apr 2025',
    },
    {
      title: 'TripLedger',
      description:
        'Offline-first expense tracker with CRDT-based ledger sync.',
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      technologies: ['React Native', 'Node.js', 'Azure', 'SQLite'],
      achievements: [
        'Ensured eventual consistency for 10k daily transactions using CRDTs',
        'Secured APIs with mock Azure AD B2C blocking 100% unauthorised writes',
      ],
      githubUrl: 'https://github.com/AshishBytes/tripledger',
      liveUrl: undefined,
      image:
        'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      timeframe: 'Aug 2024 – Dec 2024',
    },
  ];

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Innovative solutions built with cutting-edge technologies"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={project.title} delay={index * 0.2} className="group">
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="flex items-center mb-2">
              {project.icon}
              <h3 className="text-2xl font-bold text-gray-800 ml-3">
                {project.title}
              </h3>
            </div>
            {project.timeframe && (
              <p className="text-sm text-gray-500 mb-4 ml-11">{project.timeframe}</p>
            )}

            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                Key Achievements:
              </h4>
              <ul className="space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                href={project.githubUrl}
                icon={<Github size={16} />}
                className="flex-1"
              >
                Code
              </Button>
              <Button
                variant="primary"
                size="sm"
                href={project.liveUrl}
                icon={<ExternalLink size={16} />}
                className="flex-1"
              >
                Live Demo
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
