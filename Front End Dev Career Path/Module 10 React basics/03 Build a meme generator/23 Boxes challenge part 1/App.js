import React from "react"
import boxes from "./boxes"

export default function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    
    const [squares, setSquares] = React.useState(boxes)
    const squareElements = squares.map(square => (
        <button className="box" key={square.id}></button>
    ))
                
    return (
        <main>
            {squareElements}
        </main>
    )
}
