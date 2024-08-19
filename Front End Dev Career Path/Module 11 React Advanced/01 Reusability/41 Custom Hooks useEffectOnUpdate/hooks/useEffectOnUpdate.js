import React from "react"

export default function useEffectOnUpdate(effectFunction, deps) {
    const firstRender = React.useRef(true)

    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            effectFunction()
        }
    }, deps)
}

/**
 * Mini-quiz:
 * What are the 2 parameters in React.useEffect?
 * 1 callback function
 * 2 dependencies (when the function should occur)
 * 
 *  * Mini-challenge:
 * Update our custom hook function to accept
 * the same parameters we talked about above
 * Update the code to use our hook's parameters
 * instead of the values from the Toggle component
 */