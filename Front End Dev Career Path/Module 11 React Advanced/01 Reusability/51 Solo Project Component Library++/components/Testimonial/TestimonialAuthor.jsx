import React from "react"

export default function TestimonialAuthor({ author, role }) {
    return(
        <div className="testimonial-author">
            <p>{author}</p>
            <p>{role}</p>
        </div>
    )
}