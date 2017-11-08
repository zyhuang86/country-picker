import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class TopMenuBar extends Component {

  static propTypes = {
    toggleLeftPanelDisplay: PropTypes.func.isRequired,
    toggleRightPanelDisplay: PropTypes.func.isRequired,
    toggleAboutDisplay: PropTypes.func.isRequired
  };

  render() {
    return (
      <Navbar className="navbar-fixed-top">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Country Picker</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullLeft>
          <NavItem eventKey={1} href="#">
            Home&nbsp;&nbsp;<i className="fa fa-home"/>
          </NavItem>
          <NavItem eventKey={2} href="#" onClick={this.props.toggleLeftPanelDisplay}>
            Control&nbsp;&nbsp;<i className="fa fa-dashboard"/>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3} href="#" onClick={this.props.toggleAboutDisplay}>
            About&nbsp;&nbsp;<i className="fa fa-info-circle"/>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
};