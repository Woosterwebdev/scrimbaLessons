import React from "react"

export default function LogoTestimonial({ logo }) {
    return(
        <img className="quote-logo" src={`./public/${logo}.png`} />
    )
}