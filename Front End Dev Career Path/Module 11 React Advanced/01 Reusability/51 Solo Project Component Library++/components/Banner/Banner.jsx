import React from "react"

export default function Banner({ children, style, variant }) {
    return(
        <div className="banner">
            {children}
        </div>
    )
}