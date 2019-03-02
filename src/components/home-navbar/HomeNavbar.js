import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';


class HomeNavbar extends React.Component {

    render() {
        return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/features">Feature I</Nav.Link>
                <Nav.Link href="/pricing">Feature II</Nav.Link>

                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/action/1">Action I</NavDropdown.Item>
                  <NavDropdown.Item href="/action/2">Action II</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/action/3">Something</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Nav>
                <Nav.Link href="/profile/1">Profile</Nav.Link>
                <Nav.Link href="/Logout">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }

};

export default HomeNavbar;
