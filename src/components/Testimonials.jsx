import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Section from './shared/Section.jsx';
import Card from './shared/Card.jsx';
import PropTypes from 'prop-types';

/**
 * @typedef {Object} Testimonial
 * @property {string} name - The person's name
 * @property {string} role - Their professional role
 * @property {string} image - Profile image URL
 * @property {string} quote - Their testimonial quote
 */

/** @type {Testimonial[]} */
const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Engineering Manager at Happy',
    image:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      'Ashish is a highly skilled engineer with a knack for solving complex problems. His contributions were critical to our project success.',
  },
  {
    name: 'Rahul Verma',
    role: 'CTO at Reef',
    image:
      'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      'Working with Ashish was a pleasure. He consistently delivered high quality code and innovative solutions.',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Co-founder at HackIITK',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      'Ashish led our technical team with dedication and creativity, pushing the boundaries of what we thought possible.',
  },
];

const Testimonials = () => (
  <Section
    id="testimonials"
    title="What People Say"
    subtitle="A few words from colleagues and collaborators"
    background="gray"
  >
    <Swiper
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 4000 }}
      loop
      pagination={{ clickable: true }}
      className="pb-8"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.name} className="px-4">
          <Card className="text-center max-w-xl mx-auto" hover={false}>
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-700 mb-4 leading-relaxed">"{t.quote}"</p>
            <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
            <p className="text-sm text-gray-600">{t.role}</p>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  </Section>
);

export default Testimonials;