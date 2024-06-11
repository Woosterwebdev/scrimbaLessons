import React from "react"

export default function Contact() {
    return (
        <div className="contact-card">
            <img src="./images/fluffykins.png"/>
            <h3>Fluffykins</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>(212) 555-2345</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>fluff@me.com</p>
            </div>
        </div>
    )
}