import React from "react"
import Die from "./Die"

/**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 * 
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  
  const diceElements = dice.map(die => <Die value={die} />)
  
  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }
  
  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
    </main>
  )
}