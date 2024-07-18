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