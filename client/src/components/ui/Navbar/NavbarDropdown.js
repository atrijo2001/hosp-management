import React from 'react'
import {NavDropdown} from "react-bootstrap"

const NavbarDropdown = () => {
    return (
        <NavDropdown title="services" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#services/3.1">Book an appointment</NavDropdown.Item>
            <NavDropdown.Item href="#services/3.2">Institutes</NavDropdown.Item>
            <NavDropdown.Item href="#services/3.3">Departments</NavDropdown.Item>
            <NavDropdown.Item href="#services/3.4">Ambulance servicees</NavDropdown.Item>
            <NavDropdown.Item href="#services/3.5">Emergency servicees</NavDropdown.Item>
            <NavDropdown.Item href="#services/3.5">IPD, OPD & Daycare</NavDropdown.Item>
            <NavDropdown.Item href="#services/3.5">Radiology & Pathology</NavDropdown.Item>
            <NavDropdown.Item href="#services/3.5">Daycare</NavDropdown.Item>
        </NavDropdown>
    )
}

export default NavbarDropdown
