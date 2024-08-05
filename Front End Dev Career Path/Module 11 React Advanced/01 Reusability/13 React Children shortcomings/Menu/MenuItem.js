import React from "react"

export default function MenuItem({ children, toggle, open }) {
    console.log(toggle, open)
    return (
        <div className="menu-item">
            {children}
        </div>
    )
}