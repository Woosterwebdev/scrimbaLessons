import React from "react"

export default function TestimonialWithImgImage({ img }) {
    return(
        <>
            <img className="testimonial-image" src={`./public/${img}.png`} />
        </>
    )
}