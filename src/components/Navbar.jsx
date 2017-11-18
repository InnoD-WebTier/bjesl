import React from "react";

import NavbarLink from "./NavbarLink";
import "../styles/Navbar.scss";

import Logo from './logo.svg';

const Navbar = (props) => {
  return (<div className="navbar">
    <div className="navbar__col navbar__logo">
      <NavbarLink to="" location={props.location}>
        <img src={Logo} alt="BJESL" />
      </NavbarLink>
    </div>
    {props.pages.map(page => <NavbarLink to={page} location={props.location} />)}
  </div>);
};

export default Navbar;
