// import React from "react"

// export default function App() {
//     /**
//      * Challenge: Set up state to track our count (initial value is 0)
//      */
//     const [count, setCount] = React.useState(0)
//     return (
//         <div className="counter">
//             <button className="counter--minus">–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus">+</button>
//         </div>
//     )
// }

// import React from "react"

// export default function App() {
//     /**
//      * Challenge: Create a function called `add` that runs
//      * when the + button is clicked. (Can just console.log("add") for now)
//      */
//     const [count, setCount] = React.useState(0)
//     function add() {
//         console.log("add")
//     }
//     return (
//         <div className="counter">
//             <button className="counter--minus">–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }

// import React from "react"

// export default function App() {
//     /**
//      * Challenge: 
//      * See if you can think of a way to add 1 to the count
//      * every time the + button is clicked
//      */
//     const [count, setCount] = React.useState(0)
    
//     function add() {
//         setCount(count + 1)
//     }
    
//     return (
//         <div className="counter">
//             <button className="counter--minus">–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }

import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Add functionality to the minus button
     */
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(count + 1)
    }
    
    function subtract() {
        setCount(count - 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
