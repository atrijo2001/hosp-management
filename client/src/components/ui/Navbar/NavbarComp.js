import React from 'react'
import { Container } from 'react-bootstrap';
import {Navbar, Nav} from "react-bootstrap";
import {BrowserRouter, Link} from "react-router-dom"

import NavbarDropdown from "./NavbarDropdown"
const NavbarComp = () => {
    return (
        <BrowserRouter>
            <Navbar collapseOnSelect bg="dark" expand="sm" variant="dark" fixed="top">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Navbar.Brand href="#home">
                            <Nav className="mr-auto">
                                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                                <Nav.Link href="#doctor">Doctors</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link> 
                                <NavbarDropdown/>
                            </Nav>
                        </Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
        </BrowserRouter>
    )
}

export default NavbarComp;
