import React from "react"

export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <p>Votes: {props.upvote}</p>
            <hr />
        </div>
    )
}