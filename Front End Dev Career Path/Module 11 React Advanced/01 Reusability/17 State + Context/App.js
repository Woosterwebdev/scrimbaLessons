import React from "react"
import Header from "./Header"
import Button from "./Button"

const ThemeContext = React.createContext()

export default function App() {
    
    /**
     * Challenge part 1:
     * Add state to the App component. Default value === "light". 
     * Pass that state as the value to the context provider.
     */

    const [theme, setTheme] = React.useState("light")
     
    /* Challenge part 2:
     * Create a `toggleTheme` function to that uses `setTheme`
     * to change the value from "light" to "dark" and vice versa.
     */
    
    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    /**
     * Challenge part 3:
     * Figure out how to pass BOTH the `theme` value and 
     * the `toggleTheme` function down through the context value
     */

    /**
     * Challenge part 4:
     * Now that we're passing an object instead of a string through
     * context, update the Button and Header components to receive the
     * correct values again.
     */
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }