import React from "react"
import { Outlet } from "react-router-dom"

export default function AuthRequired() {
    // Check the authenticated status of the user
    // If they're NOT authenticated
        // send the user to the login page
    // If they ARE authenticated
        // Render the Outlet
    return <Outlet />
}