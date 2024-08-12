import React from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {
    const { open, menuId } = React.useContext(MenuContext)

    /* aria-hidden={!open} is good accessibilty practice but 
    the screen reader won't see this with null rendered so 
    it is not necessary

    aria-controls needed menuId added */

    return open ? (
        <div className="menu-dropdown" id={menuId}>
            {children}
        </div>
    ) : null
}