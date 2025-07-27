import React from 'react';
import Section from './shared/Section';
import resume from '../data/resume.json';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" subtitle="My academic background">
      <div className="prose max-w-none">
        {resume.education.split('\n').map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </Section>
  );
};

export default Education;
