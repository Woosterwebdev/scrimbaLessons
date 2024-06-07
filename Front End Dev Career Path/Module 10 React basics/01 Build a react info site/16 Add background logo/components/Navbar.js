/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react"

export default function Navbar() {
    return (
        <nav className="nav-container">
            <img src="../images/react-icon-small.png" alt="React Logo" className="logo" />
            <h1 className="title">ReactFacts</h1>
            <h2 className="sub-title">React Course - Project 1</h2>
        </nav>
    )
}