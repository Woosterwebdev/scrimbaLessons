What parameters does useEffect take in?

useEffect takes a function and a dependency array.

When does the useEffect run?

When the DOM is rendered if the dependency is an empty array. If there is a variable then the useEffect will run whenever that variable changes. If there is no dependency array the useEffect will run with every state change as well as every render.

What is the useEffect functions return value?

It is a cleanup function to cleanup eventlisteners and other pending items. If no cleanup function is given it returns undefined.
