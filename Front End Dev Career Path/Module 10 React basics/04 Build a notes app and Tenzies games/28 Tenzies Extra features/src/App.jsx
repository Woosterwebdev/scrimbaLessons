import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [roll, setRoll] = React.useState(0)
    const [best, setBest] = React.useState(
        () => JSON.parse(localStorage.getItem("best")) || 0
    )
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const allSameValue = dice.every(die => die.value === dice[0].value)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    React.useEffect(() => {
        localStorage.setItem("best", JSON.stringify(best))
    }, [best])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
        
    function rollDice() {
        if (!tenzies) {
        setRoll(prevRoll => prevRoll + 1)
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
        } else {
            setTenzies(false)
            if (roll < best || best == 0) {
                setBest(roll)
            }
            setDice(allNewDice())
            setRoll(0)
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }

    function clearBest() {
        setBest("0")
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <div className="buttons">
                <button 
                    className="btn" 
                    onClick={rollDice}
                >
                    {tenzies ? "New Game" : "Roll"}
                </button>
                <button
                    className="btn"
                    onClick={clearBest}
                    >
                        Rest Best
                </button>
            </div>
            <div className="scores">
                <h2 className="rolls">Rolls: {roll}</h2>
                <h2 className="best">Best: {best}</h2>
            </div>
        </main>
    )
}