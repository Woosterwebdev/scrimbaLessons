import React from "react"
import Joke from "./Joke"

/*
Challenge: Think critically - how would you pass in a prop that wasn't
a string datatype.

E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
prop that is a number, as well as a prop with an array of comments, and a boolean
of whether the joke is a pun (`isPun`).
*/

export default function App() {
    return (
        <div>
            <Joke 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                upvote={0}
            />
            <Joke 
                setup="I got my daughter a fridge for her birthday." 
                punchline="I can't wait to see her face light up when she opens it."
                upvote={4}
            />
            <Joke 
                setup="How did the hacker escape the police?" 
                punchline="He just ransomware!"
                upvote={3} 
            />
            <Joke 
                setup="Why don't pirates travel on mountain roads?" 
                punchline="Scurvy." 
                upvote={6}
            />
            <Joke 
                setup="Why do bees stay in the hive in the winter?" 
                punchline="Swarm."
                upvote={2}
            />
            <Joke 
                setup="What's the best thing about Switzerland?" 
                punchline="I don't know, but the flag is a big plus!" 
                upvote={1}
            />
        </div>
    )
}