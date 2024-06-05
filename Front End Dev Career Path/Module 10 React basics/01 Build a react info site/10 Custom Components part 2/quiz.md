Quiz!

1. What is a React component?
   Similar to JS functions, components are small reusable bits of code that can be use over and over throughout a project.

2. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

It is using camel casing instead of pascal casing. 3. What's wrong with this code?

```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

<Header /> instead of Header()
