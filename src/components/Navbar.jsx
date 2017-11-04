import React from "react";

import NavbarLink from "./NavbarLink";
import "../styles/Navbar.scss";

const Navbar = (props) => {
  return (<div className="navbar">
    {props.pages.map(page => <NavbarLink location={page} />)}
  </div>);
};

export default Navbar;
