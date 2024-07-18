import React from "react"
import Die from "./Die"

/**
 * Challenge:
 * 
 * Write a function (allNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */

export default function App() {
  function allNewDice() {
    let newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice

    // OR
    // while(newDice.length < 10) {
    //     const randomNum = Math.floor(Math.random() * 6) + 1
    //     dice.push(randomNum)
    // }
    // return newDice
  }

  console.log(allNewDice)

  return (
    <main>
      <div className="dice-container">
        <Die value= "1" />
        <Die value= "1" />
        <Die value= "1" />
        <Die value= "1" />
        <Die value= "1" />
        <Die value= "1" />
        <Die value= "1" />
        <Die value= "1" />
        <Die value= "1" />
        <Die value= "1" />
      </div>
    </main>
  )
}