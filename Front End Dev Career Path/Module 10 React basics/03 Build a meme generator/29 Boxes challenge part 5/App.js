import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        setSquares(prevSquares => {
            /*setSquares(prevSquares => {
                const newSquares = []
                for (const currentSquare of prevSquares) {
                    if (currentSquare.id === id) {
                        const updatedSquare = {
                            ...currentSquare,
                            on: !currentSquare.on
                        }
                    newSquares.push(updatedSquare);
                    } else {
                    newSquares.push(currentSquare);
                    }
                }
                return newSquares
            })*/
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id}
            on={square.on} 
            toggle={() => toggle(square.id)}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
