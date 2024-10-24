1. What is a "side effect" in React? What are some examples?
   Anything outside of Reacts scope. An API request is an example of a side effect.

2. What is NOT a "side effect" in React? Examples?
   Anything happening inside the scope of React. Props and state changes are not side effects.

3. When does React run your useEffect function? When does it NOT run
   the effect function?
   It runs useEffect after everything is rendered to the page based on the dependancy array.

4. How would you explain what the "dependecies array" is?
   A dependancy array is similar to an if statement. If the dependancy has changed, the useEffect will run. If the dependancy has not changed, the useEffect will not run.

/_ Instuctor's answers _/

1. What is a "side effect" in React? What are some examples?

- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync

2. What is NOT a "side effect" in React? Examples?

- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data,
  render DOM elements

3. When does React run your useEffect function? When does it NOT run
   the effect function?

- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders

4. How would you explain what the "dependecies array" is?

- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function
