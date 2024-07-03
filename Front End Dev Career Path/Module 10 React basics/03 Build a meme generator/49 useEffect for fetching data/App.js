import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    /**
     * Quiz:
     * 1. What will happen if I put back our Star Wars API call
     *    into the effect function? 
     * useEffect will run on first render and each time count changes.
     * 
     * 2. How will the useEffect be different if I use 
     *    setStarWarsData() instead of console.log()
     * It will longer console.log and still only run effect on first render.
     * 3. What SHOULD be in our dependencies array in this case?
     * An empty array should be the dependancy.
     */
    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}


