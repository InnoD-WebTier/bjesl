import React from 'react';
// import Link from 'gatsby-link';
import EventsList from '../components/EventsList';

const Blog = () => {
  const events = [{ title: "SELS Speaker Series: Oakland Raiders GC",
    date: "OCT 11",
    info: "Come see Dan Ventrelle, the General Counsel for the Oakland Raiders!" }];

  return (
    <EventsList events={events} />
  );
};

export default Blog;
