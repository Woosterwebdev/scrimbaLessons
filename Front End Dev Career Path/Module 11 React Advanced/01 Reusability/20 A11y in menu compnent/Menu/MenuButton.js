import React from "react"
import Button from "../Button/Button"
import { MenuContext } from "./Menu"

/* aria-expanded, aria-haspopup, aria-controls added 
for accessibility */

export default function MenuButton({ children }) {
    const { toggle, open, menuId } = React.useContext(MenuContext)
    return (
        <Button 
            onClick={toggle} 
            aria-expanded={open} 
            aria-haspopup="true"
            aria-controls={menuId}
        >{children}</Button>
    )
}