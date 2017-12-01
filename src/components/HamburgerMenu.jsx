import React from "react";
import NavbarLink from "./NavbarLink";

import "../styles/HamburgerMenu.scss";

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggled: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ toggled: !this.state.toggled });
  }

  render() {
    return (
      <div>
        <div
          className={this.state.toggled ? 'Hamburger-Toggled' : 'Hamburger'}
          onClick={this.toggleMenu}
          role='button'
          tabIndex={0}
        >
          <div className='Hamburger__Stripe-Top' />
          <div className='Hamburger__Stripe-Middle' />
          <div className='Hamburger__Stripe-Bottom' />
        </div>

        <div className={this.state.toggled ? 'Hamburger__Links-Toggled' : 'Hamburger__Links'}>
          {this.props.pages.map(page =>
            <NavbarLink key={page} to={page} location={this.props.location} />)}
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
