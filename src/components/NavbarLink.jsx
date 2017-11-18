/* global window: false */
import React from "react";
import Link from 'gatsby-link';

const NavbarLink = (props) => {
  const selected = window.location.href.indexOf(props.location) > -1;
  const label = props.location[0].toUpperCase() + props.location.substring(1);

  return (<div className={`Navbar__Column${selected ? ' Navbar__Column-Selected' : ''}`}>
    <Link
      className={`Navbar__ColumnLink${selected ? ' Navbar__ColumnLink-Selected' : ''}`}
      to={`/${props.location}`}
    >
      {label}
    </Link>
  </div>);
};

export default NavbarLink;
