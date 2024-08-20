import React from "react"
import classnames from "classnames"

export default function Badge({ children, style, variant, ...rest }) {
    let styleClass = style ? `badge badge-${style}` : ""
    let variantClass = variant ? `${variant}` : ""
    const allClasses = classnames(styleClass, variantClass)
    return (
        <p className={allClasses} {...rest}>
            {children}
        </p>
        )
}