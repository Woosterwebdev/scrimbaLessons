import React from "react"

export default function TestimonialAuthor({ author, role }) {
    return(
        <div className="testimonial-author">
            <p>{author}</p>
            <p className="testimonial-slash">/</p>
            <p className="testimonial-role">{role}</p>
        </div>
    )
}