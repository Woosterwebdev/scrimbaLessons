import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostVanDetailLayout() {
    return(
        <div>
            <div>
                
            </div>
            <nav className="host-nav">
                <NavLink
                    to="/host/van"
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Details
                </NavLink>

                <NavLink
                    to="/host/income"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Pricing
                </NavLink>
                
                <NavLink
                    to="/host/vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Photos
                </NavLink>

            </nav>
            <Outlet />
        </div>
    )
}