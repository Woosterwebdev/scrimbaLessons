import React from "react"

export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)
    
    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <button onClick={changeMind} className="state--value">
                {isGoingOut ? "Yes" : "No"}
            </button>
        </div>
    )
}
