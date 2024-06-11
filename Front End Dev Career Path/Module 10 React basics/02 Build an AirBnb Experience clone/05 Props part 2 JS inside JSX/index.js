// import React from "react"
// import ReactDOM from "react-dom"

// /* Call varibles in JSX */

// function App() {
//     const firstName = "Joe"
//     const lastName = "Schmoe"
    
//     return (
//         <h1>Hello ${firstName} ${lastName}!</h1> // Didn't work.
//     )
// }

// ReactDOM.render(<App />, document.getElementById("root"))

// import React from "react"
// import ReactDOM from "react-dom"

// function App() {
//     const firstName = "Joe"
//     const lastName = "Schmoe"
//     /**
//      * Challenge: finish off the h1 below so it says
//      * "Hello Joe Schmoe!"
//      */
//     return (
//         <h1>Hello {firstName} {lastName}!</h1>
//     )
// }

// ReactDOM.render(<App />, document.getElementById("root"))

import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    
    /**
     * Challenge: fix the h1 below to use the timeOfDay
     * string we determined in the code above
     */
    
    return (
        <h1>Good {timeOfDay}!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))