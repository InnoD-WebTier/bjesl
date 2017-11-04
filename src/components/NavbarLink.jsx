/* global window: false */
import React from "react";
import Link from 'gatsby-link';

const NavbarLink = (props) => {
  const selected = window.location.href.indexOf(props.location) > -1;
  const label = props.children || props.location[0].toUpperCase() + props.location.substring(1);

  return (<div className={`navbar__col${selected ? ' navbar__col--selected' : ''}`}>
    <Link
      className={`navbar__col_link${selected ? ' navbar__col_link--selected' : ''}`}
      to={`/${props.location}`}
    >
      {label}
    </Link>
  </div>);
};

export default NavbarLink;
