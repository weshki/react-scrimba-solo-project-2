import React from "react";
import logo from "../images/logo.png"
import "../style.css"


export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo" className="nav--logo" />
            <h3>my travel journal.</h3>
        </nav>
    )
}