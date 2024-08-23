import React from "react"

export default function TestimonialWithImgQuote({ children }) {
    return(
        <div className="testimonial-quote-container">
            <img className="quote-img" src="./public/quote.png" />
            <p>{children}</p>
        </div>
    )
}