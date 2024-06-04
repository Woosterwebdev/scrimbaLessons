1. Why do we need to `import React from "react"` in our files?
   React is a dependency that is needed to use JSX in JS.

2. If I were to console.log(page) in index.js, what would show up?
   An object.

3. What's wrong with this code:

```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

React.render need one parent element. The code above has two siblings which .render can not execute.

4. What does it mean for something to be "declarative" instead of "imperative"?
   Declarative programming you state what you what as the imperative programming you state what you want and how.

5. What does it mean for something to be "composable"?
   You can use "subassemblies" of could to combine them to make one big "assembly"
