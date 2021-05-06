import React from 'react'
import "./navbar.css"
import Heart from "./Heart"

const NavbarComp = () => {
    return (
        <div>
           <div className="nav-backgrouond">
                <div className="container">
                    <h3 className="text-center text-prop">HELIOS HOSPITAL</h3>
                </div>
                <Heart />
            </div>
        </div>
        
    )
}

export default NavbarComp
