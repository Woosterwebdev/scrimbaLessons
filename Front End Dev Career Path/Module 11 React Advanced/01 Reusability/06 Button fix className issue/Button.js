import React from "react"

export default function Button({children, size, className, ...rest}) {
    /**
     * Challenge: See if you can fix the problem with the
     * conflicting `className` props. Doesn't need to be
     * elegant, just see if you can get the button to be
     * both large AND with green text
     */
    
    let sizeClass
    if (size === "sm") sizeClass = "button-small"
    if (size === "lg") sizeClass = "button-large"
    const classes = `${sizeClass} ${className}`
    
    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    )
}

/* Instructor solution #1 

export default function Button({children, className, size, ...rest}) {
    let sizeClass
    if (size === "sm") sizeClass = "button-small"
    if (size === "lg") sizeClass = "button-large"
    
    return (
        <button className={`${sizeClass} ${className}`} {...rest}>
            {children}
        </button>
    )
}
    Instructor solution #2

import React from "react"
import classnames from "classnames"
export default function Button({children, className, size, ...rest}) {
    let sizeClass
    if (size === "sm") sizeClass = "button-small"
    if (size === "lg") sizeClass = "button-large"
    
    const allClasses = classnames(sizeClass, className)
    
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}
    Instructor solution #3 would require css className change 
    from button-large to button-lg and button-small to button-sm

import React from "react"
import classnames from "classnames"
export default function Button({children, className, size, ...rest}) {
    let sizeClass = size ? `button-${size}` : ""
    const allClasses = classnames(sizeClass, className)
    
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
} 
*/