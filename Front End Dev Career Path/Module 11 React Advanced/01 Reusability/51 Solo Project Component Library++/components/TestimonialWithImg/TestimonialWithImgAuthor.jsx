import React from "react"

export default function TestimonialWithImgAuthor({ author, role }) {
    return(
        <div className="testimonial-with-img-author">
            <p>{author}</p>
            <p>{role}</p>
        </div>
    )
}