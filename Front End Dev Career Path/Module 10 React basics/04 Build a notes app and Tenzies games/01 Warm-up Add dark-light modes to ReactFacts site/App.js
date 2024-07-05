import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkMode] = React.useState(false)
    
    function toggle() {
        setDarkMode(prevMode => !prevMode)
    }
    
    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode}
                toggleDarkMode={() => toggle()}            
            />
            <Main 
                darkMode={darkMode}
            />
        </div>
    )
}