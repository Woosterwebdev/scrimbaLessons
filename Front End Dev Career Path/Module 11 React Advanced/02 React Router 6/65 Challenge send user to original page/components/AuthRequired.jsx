import React from "react"
import { useLocation, Outlet, Navigate } from "react-router-dom"

export default function AuthRequired() {
    const isLoggedIn = localStorage.getItem("loggedin")
    const location = useLocation()
    if (!isLoggedIn) {
        return (
            <Navigate 
                to="/login" 
                state={{
                    message: "You must log in first",
                    prevLocation: `${location.pathname}`                    
                }} 
                replace
            />)
    }
    return <Outlet />
}