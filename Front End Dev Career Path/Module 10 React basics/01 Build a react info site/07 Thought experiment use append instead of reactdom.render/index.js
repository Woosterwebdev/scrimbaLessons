/* local react install covered in a later lesson */

import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// const page = (
//     <nav>
//        <h1>Company</h1>
//        <ul>
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//        </ul>
//     </nav>
//  )
 
//  document.getElementById('root').append(page)

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

const page = (
   <div>
       <h1>My awesome website in React</h1>
       <h3>Reasons I love React</h3>
       <ol>
           <li>It's composable</li>
           <li>It's declarative</li>
           <li>It's a hireable skill</li>
           <li>It's actively maintained by skilled people</li>
       </ol>
   </div>
)

ReactDOM.render(page, document.getElementById('root'))

/* React 18

import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(page)

*/