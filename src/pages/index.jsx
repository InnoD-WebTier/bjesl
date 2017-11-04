import React from 'react';
import Link from 'gatsby-link';
import OfficerPortrait from '../components/OfficerPortrait';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <div className="OfficerPortraits">
      <OfficerPortrait
        name="Jane Doe"
        bio="Jane Doe is a 3L at UC Berkeley School of Law and is one of the Editors-in-Chief
             of the Berkeley Journal of Entertainment and Sports Law."
        img="http://via.placeholder.com/150x150"
      />
      <OfficerPortrait
        name="Jane Doe"
        bio="Jane Doe is a 3L at UC Berkeley School of Law and is one of the Editors-in-Chief
             of the Berkeley Journal of Entertainment and Sports Law."
        img="http://via.placeholder.com/150x150"
      />
      <OfficerPortrait
        name="Jane Doe"
        bio="Jane Doe is a 3L at UC Berkeley School of Law and is one of the Editors-in-Chief
             of the Berkeley Journal of Entertainment and Sports Law."
        img="http://via.placeholder.com/150x150"
      />
      <OfficerPortrait
        name="Jane Doe"
        bio="Jane Doe is a 3L at UC Berkeley School of Law and is one of the Editors-in-Chief
             of the Berkeley Journal of Entertainment and Sports Law."
        img="http://via.placeholder.com/150x150"
      />
      <OfficerPortrait
        name="Jane Doe"
        bio="Jane Doe is a 3L at UC Berkeley School of Law and is one of the Editors-in-Chief
             of the Berkeley Journal of Entertainment and Sports Law."
        img="http://via.placeholder.com/150x150"
      />
      <OfficerPortrait
        name="Jane Doe"
        bio="Jane Doe is a 3L at UC Berkeley School of Law and is one of the Editors-in-Chief
             of the Berkeley Journal of Entertainment and Sports Law."
        img="http://via.placeholder.com/150x150"
      />
      <OfficerPortrait
        name="Jane Doe"
        bio="Jane Doe is a 3L at UC Berkeley School of Law and is one of the Editors-in-Chief
             of the Berkeley Journal of Entertainment and Sports Law."
        img="http://via.placeholder.com/150x150"
      />
      <OfficerPortrait
        name="Jane Doe"
        bio="Jane Doe is a 3L at UC Berkeley School of Law and is one of the Editors-in-Chief
             of the Berkeley Journal of Entertainment and Sports Law."
        img="http://via.placeholder.com/150x150"
      />
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
