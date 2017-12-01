import React from "react";
import Link from 'gatsby-link';

const NavbarLink = (props) => {
  const selected = props.location.pathname.indexOf(props.to) > -1;
  const label = props.children || props.to[0].toUpperCase() + props.to.substring(1);

  return (<div className={`Navbar__Column${selected ? ' Navbar__Column-Selected' : ''}`}>
    <Link
      className={`Navbar__ColumnLink${selected ? ' Navbar__ColumnLink-Selected' : ''}`}
      to={`/${props.to}`}
    >
      {label}
    </Link>
  </div>);
};

export default NavbarLink;
