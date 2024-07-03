import React from "react"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer--contacts">
                <a href="https://github.com/Woosterwebdev"><img className="footer--img" src="./assets/github.svg" /></a>
                <a href="https://www.linkedin.com/in/chris-wooster/"><img className="footer--img" src="./assets/linkedin.svg" /></a>
                <a href="mailto:woosterwebdev@gmail.com"><img className="footer--img" src="./assets/email.svg" /></a>
            </div>
            <p className="footer--content">&copy; 2024 Christopher Wooster</p>
        </footer>
    )
}