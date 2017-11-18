import React from "react";

import OfficerPortrait from './OfficerPortrait';

import "../styles/OfficerPortraitGrid.scss";

const OfficerPortraitGrid = props => (
  <div className="OfficerPortraitGrid">
    {props.people.map((person) => {
      return <OfficerPortrait name={person.name} bio={person.bio} img={person.img} />;
    })}
  </div>
);

export default OfficerPortraitGrid;
