import React from "react";
import '../styles/OfficerPortrait.scss';

const OfficerPortrait = (props) => {
  return (
    <div className='OfficerPortrait__Container'>
      <img alt='' className='OfficerPortrait__Thumbnail' src={props.img}></img>
      <div className='OfficerPortrait__Biography'>
        <h4>{props.name}</h4>
        <p>{props.bio}</p>
      </div>
    </div>
  );
};

export default OfficerPortrait;
