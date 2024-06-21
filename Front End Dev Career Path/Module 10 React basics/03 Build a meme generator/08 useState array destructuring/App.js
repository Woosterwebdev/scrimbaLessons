// import React from "react"

// export default function App() {
//     const result = React.useState("Yes")
//     console.log(result)
//     return (
//         <div className="state">
//             <h1 className="state--title">Is state important to know?</h1>
//             <div className="state--value">
//                 <h1>{result[0]}</h1>
//             </div>
//         </div>
//     )
// }

/* 
Return array [Yes, f{}]
With array destructuring Yes is assigned to the variable result
See below for example
*/

import React from "react"

export default function App() {
    const [result, func] = React.useState("Yes")
    console.log(result)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result}</h1>
            </div>
        </div>
    )
}
