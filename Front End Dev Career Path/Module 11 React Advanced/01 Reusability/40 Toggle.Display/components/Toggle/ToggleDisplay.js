import React from "react"
import { ToggleContext } from "./toggle"

export default function ToggleDisplay({ children }) {
    const { on } = React.useContext(ToggleContext)
    return children(on)
}