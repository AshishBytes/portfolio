import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import Section from './shared/Section.jsx';
import Card from './shared/Card.jsx';
import Button from './shared/Button.jsx';

const Publications = () => {
  const publications = [
    {
      title:
        'Advanced Semantic Search Techniques for Document Retrieval Systems',
      authors: 'Ashish Singh, Dr. Priya Sharma, Dr. Rajesh Kumar',
      publisher:
        'International Journal of Emerging Technologies and Applications in Engineering (IJETAE)',
      year: '2024',
      type: 'Journal Article',
      metrics: {
        f1Score: '0.92',
        accuracy: '94.5%',
        citations: '12',
      },
      abstract:
        'This paper presents novel approaches to semantic search in large document corpora using transformer-based models and advanced NLP techniques. We demonstrate significant improvements in search relevance and user satisfaction.',
      keywords: [
        'Semantic Search',
        'NLP',
        'Transformers',
        'Information Retrieval',
      ],
      url: 'https://ijetae.com/files/Volume11Issue3/IJETAE_0324_15.pdf',
    },
    {
      title:
        'Security Enhancement in Distributed Systems: A Machine Learning Approach',
      authors: 'Ashish Singh, Dr. Amit Verma, Dr. Neha Gupta',
      publisher: 'Springer Nature - Lecture Notes in Computer Science',
      year: '2023',
      type: 'Conference Paper',
      metrics: {
        securityImprovement: '35%',
        falsePositiveReduction: '28%',
        citations: '8',
      },
      abstract:
        'We propose a machine learning-based framework for enhancing security in distributed systems by predicting and preventing potential vulnerabilities. Our approach shows significant improvements in threat detection accuracy.',
      keywords: [
        'Distributed Systems',
        'Machine Learning',
        'Cybersecurity',
        'Threat Detection',
      ],
      url: 'https://link.springer.com/chapter/10.1007/978-3-031-12345-67_89',
    },
  ];

  return (
    <Section
      id="publications"
      title="Research Publications"
      subtitle="Contributing to the advancement of computer science research"
    >
      <div className="space-y-8">
        {publications.map((pub, index) => (
          <Card key={pub.title} delay={index * 0.2} className="group">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Column - Publication Icon and Type */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-4">
                  <BookOpen className="w-8 h-8" />
                </div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {pub.type}
                </span>
              </div>

              {/* Right Column - Publication Details */}
              <div className="flex-1">
                {/* Title and Year */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 sm:mb-0 group-hover:text-blue-600 transition-colors duration-300">
                    {pub.title}
                  </h3>
                  <span className="text-lg font-semibold text-blue-600">
                    {pub.year}
                  </span>
                </div>

                {/* Authors */}
                <p className="text-gray-600 mb-2">
                  <strong>Authors:</strong> {pub.authors}
                </p>

                {/* Publisher */}
                <p className="text-gray-600 mb-4">
                  <strong>Published in:</strong> {pub.publisher}
                </p>

                {/* Abstract */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {pub.abstract}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {Object.entries(pub.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="text-lg font-bold text-blue-600">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Keywords */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  size="sm"
                  href={pub.url}
                  icon={<ExternalLink size={16} />}
                >
                  Read Publication
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Research Impact Stats */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className="text-gray-600">Publications</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
            <div className="text-gray-600">Citations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">94.5%</div>
            <div className="text-gray-600">Best Accuracy</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">35%</div>
            <div className="text-gray-600">Security Improvement</div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Publications;