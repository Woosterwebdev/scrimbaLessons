import React from "react"

export default function Card({ children }) {
    return(
        <div className="card-container">
            <div className="card">
                {children}
            </div>
        </div>
    )
}