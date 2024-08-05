import React from "react"

export default function MenuDropdown({ children, toggle, open }) {

    /** Discovery Challenge:
     * Make it so the children of MenuDropdown also have
     * access to toggle and open.
     */

    console.log(toggle, open)
    return open ? (
        <div className="menu-dropdown">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    open,
                    toggle
                })
            })}
        </div>
    ) : null
}