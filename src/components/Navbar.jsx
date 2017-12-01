import React from "react";

import Link from 'gatsby-link';
import NavbarLink from "./NavbarLink";
import HamburgerMenu from "./HamburgerMenu";

import "../styles/Navbar.scss";

import Logo from './logo.svg';

const Navbar = (props) => {
  return (
    <div>
      <div className="Navbar__Hamburger">
        <HamburgerMenu pages={props.pages} location={props.location} />
        <div className="Navbar__Logo">
          <Link to="/">
            <img src={Logo} alt="BJESL" />
          </Link>
        </div>
      </div>
      <div className="Navbar__Full">
        <div className="Navbar__Col Navbar__Logo">
          <NavbarLink to="" location={props.location}>
            <img src={Logo} alt="BJESL" />
          </NavbarLink>
        </div>
        {props.pages.map((page) => {
          return (<NavbarLink
            key={page}
            to={page}
            location={props.location}
          />);
        })}
      </div>
    </div>
  );
};

export default Navbar;

