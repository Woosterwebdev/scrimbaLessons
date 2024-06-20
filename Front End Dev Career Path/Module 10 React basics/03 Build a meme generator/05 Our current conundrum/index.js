// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//     const thingsArray = ["Thing 1", "Thing 2"]
    
    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */
    // const thing = thingsArray.map(thing => {
        // console.log(thing)
//         return (<p>{thing}</p>)
//     })
    
//     return (
//         <div>
//             <button>Add Item</button>
//             {thing}
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
 */

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    function addItem() {
        thingsArray.push(`Thing ${thingsArray.length + 1}`)
        console.log(thingsArray)
    }
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));