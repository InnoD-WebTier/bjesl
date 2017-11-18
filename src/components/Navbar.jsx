import React from "react";

import NavbarLink from "./NavbarLink";
import HamburgerMenu from "./HamburgerMenu";

import "../styles/Navbar.scss";

const Navbar = (props) => {
  return (
    <div>
      <div className="Navbar__Hamburger">
        <HamburgerMenu pages={props.pages} />
      </div>
      <div className="Navbar__Full">
        {props.pages.map(page => <NavbarLink key={page} location={page} />)}
      </div>
    </div>
  );
};

export default Navbar;
