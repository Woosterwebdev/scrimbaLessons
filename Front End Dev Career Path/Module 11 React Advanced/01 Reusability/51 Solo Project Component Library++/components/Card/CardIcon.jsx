import React from "react"

export default function CardIcon({ cardIcon }) {
    return(
        <header className="card-icon-container">
                <img className="card-icon" src={`./public/${cardIcon}.png`} />
        </header>
    )
}