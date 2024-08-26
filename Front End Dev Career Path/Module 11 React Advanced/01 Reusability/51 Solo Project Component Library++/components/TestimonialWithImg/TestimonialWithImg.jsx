import React from "react"

export default function TestimonialWithImg({ children, imgSrc }) {
    return(
        <div className="testimonial-with-img">
            <img className="testimonial-image" src={`./public/${imgSrc}.png`} />
            <div className="quote-with-img-author">
                {children}
            </div>
        </div>
    )
}