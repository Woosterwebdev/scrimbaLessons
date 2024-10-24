import React from "react"
import Decision from "./Decision"

function App() {
    /**
     * Challenge:
     * Pass a function down via props to Decision that receives
     * the boolean in state and logs it
     */
    return (
        <div>
            <Decision sayName={
                (bool) => {
                    console.log(bool)
                }
            } />
        </div>
    )
}

export default App