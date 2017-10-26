import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

const TopMenuBar = () => {
  return (
    <Navbar className="navbar-fixed-top">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">React HeatMap</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullLeft>
        <NavItem eventKey={1} href="#">Home</NavItem>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={3} title="Options">
          <MenuItem eventKey={3.1}>About</MenuItem>
          <MenuItem divider/>
          <MenuItem eventKey={3.2}>Logout</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
};

export default TopMenuBar;