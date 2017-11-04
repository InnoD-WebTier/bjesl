import React from 'react';
import Link from 'gatsby-link';
import Event from '../components/Event';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <h3> Events </h3>
    <Event
      title="SELS Speaker Series: Oakland Raiders GC "
      date="OCT 11"
      info="Come see Dan Ventrelle, the General Counsel for the Oakland Raiders!
      Presentation topics may include Raiders licensing, compliance with NFL league rules,
      franchise relocation, and much more."
    />

    <Event
      title="3rd Annual Sports Industry Conference"
      date="APR 13"
      info="Berkeley Law Sports & Law Conference 2017 will take place April 13-14th.
      Stay tuned for more details!"
    />

    <Event
      title="SELS Speaker Series: PIXAR"
      date="FEB 22, 2017"
      info="Please join SELS as we welcome Jim Kennedy who is the Chief
      Legal Counsel at PIXAR Animation Studios."
    />
    <Link to="/page-2/">Go to page 2</Link>

  </div>

);

export default IndexPage;
