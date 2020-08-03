import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Nav, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PoolServiceLogo from "../../assets/images/Swimming-pool-service-aqua-logo-580x348.jpg";

const NavbarRx = () => {
    return (
        <Navbar bsPrefix="navbar" responisve="true" expand="lg">
            <NavLink to="/"><Navbar.Brand><span className="navbar-title">
                <Image
                    src={PoolServiceLogo}
                    width="75px"
                    height="75px"
                    className="d-inline-block align-top"
                    alt="Desert Pool Service"
                /></span></Navbar.Brand></NavLink>
            <Navbar.Brand href="/" className="navBarTitle">Desert Pool Service</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link className="navBar-font" href="/login">Login</Nav.Link>
                    <NavDropdown className="navBar-font" title="Actions" id="basic-nav-dropdown">
                        <NavDropdown.Item className="navBar-font" href="/customer">Customers</NavDropdown.Item>
                        <NavDropdown.Item className="navBar-font" href="/viewcustomer">View Customer</NavDropdown.Item>
                        <NavDropdown.Item className="navBar-font" href="/addcustomer">Add Customer</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarRx;