import React from "react"

export default function Button(props) {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
}

/* destructuring or using spread is also an option
    the prop paced in MUST use the button attributes.
    ie "onClick", "sytle", etc

export default function Button({children, ...rest}) {
    return (
        <button {...rest}>
            {children}
        </button>
    )
}
*/