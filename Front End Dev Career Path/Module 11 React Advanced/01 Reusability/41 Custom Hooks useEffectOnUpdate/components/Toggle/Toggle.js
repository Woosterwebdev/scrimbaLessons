import React from "react"
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate"

const ToggleContext = React.createContext()

export default function Toggle({ children, onToggle = () => {}}) {
    const [on, setOn] = React.useState(false)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    /**
     * Challenge: use our new, shiny custom hook
     * to set up the effect again. You'll know it's
     * working when the console log runs after clicking
     * the box, but not on the initial render.
     */

    useEffectOnUpdate(onToggle, [on]) 
    
    // if multiple functions () => {onToggle()}

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }