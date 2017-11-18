import React from 'react';
import OfficerPortraitGrid from '../components/OfficerPortraitGrid';

const About = () => {
  const people = [];
  for (let i = 0; i < 15; i += 1) {
    people.push({
      name: 'Jane Doe',
      bio: 'Jane Doe is a 3L at UC Berkeley School of Law and is one of the Editors-in-Chief of the Berkeley Journal of Entertainment and Sports Law.',
      img: 'http://via.placeholder.com/150x150',
    });
  }

  return (
    <OfficerPortraitGrid people={people} />
  );
};

export default About;
