/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
import React from "react"
import ReactDOM from "react-dom"

function TemporyName() {
    return (
        <div>
            <img src="./react-logo.png" alt="React Logo" width="40" />
            <h1>Why I am excited to be learning React!</h1>
            <ul>
                <li>I will be able to make projects with more modern and compsable code.</li>
                <li>I will have another skill to improve the quality of products I create.</li>
                <li>I will be more marketable to potential employers.</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<TemporyName />, document.getElementById('root'))