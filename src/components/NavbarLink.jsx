import React from "react";
import Link from 'gatsby-link';

const NavbarLink = (props) => {
  const selected = props.location.pathname.indexOf(props.to) > -1;
  const label = props.children || props.to[0].toUpperCase() + props.to.substring(1);

  return (<div className={`navbar__col${selected ? ' navbar__col--selected' : ''}`}>
    <Link
      className={`navbar__col_link${selected ? ' navbar__col_link--selected' : ''}`}
      to={`/${props.to}`}
    >
      {label}
    </Link>
  </div>);
};

export default NavbarLink;
