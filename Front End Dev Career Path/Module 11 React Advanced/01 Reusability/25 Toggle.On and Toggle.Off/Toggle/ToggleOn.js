/**
 * Challenge:
 * 
 * 1. Create a new component, ToggleOn, that accepts children
 *    in props
 * 2. Receive the `on` state from context
 * 3. Conditionally render `children` if `on` is true. If `on`
 *    is false, render `null` instead of `children`
 */
import React from 'react'
import { ToggleContext } from './Toggle'

export default function ToggleOn({ children }) {
    const { on } = React.useContext(ToggleContext)
    
    return on ? children : null
}