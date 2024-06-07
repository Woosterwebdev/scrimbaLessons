import React from "react"

export default function Main() {
    return (
        <div className="main">
            <h1 className="name">Christopher Wooster</h1>
            <h2 className="title">Frontend Developer</h2>
            <div className="contact-container">
                <a href="mailto:woosterwebdev@gmail.com"><img src="../images/email.png" className="icon"/></a>
                <a href="https://github.com/Woosterwebdev"><img src="../images/github.png" className="icon" /></a>
                <a href="https://www.linkedin.com/in/chris-wooster/"><img src="../images/linkedin.png" className="icon" /></a>
            </div>
            <h3 className="about">About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3>Interests</h3>
            <p>3D printing, CAD, video games, custom computers, cats, new food adventures</p>
        </div>
    )
}