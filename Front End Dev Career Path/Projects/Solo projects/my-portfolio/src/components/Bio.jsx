import React from "react"

export default function Bio() {
    return (
        <div className="bio-skills">
            <div className="bio">
                <img className="bio--img" src="./assets/chris.png" />
                <h2 className="bio--title">I am a self taught Web Developer</h2>
                <p className="bio--content">Since late 2021, I have been working on learning Web development. I began using Udemy courses in my spare 
                time. In late 2023 I realized that I needed to commit more time to learning and started on my path of full time education. 
                I found Scrimba in January 2024 and began their Frontend Developer Career Path. It was with Scrimba that
                I really grew in condience and ability.</p>
            </div>
            <h2 className="skills--title">Skills</h2>
            <div className="skills">
                <img className="skills--img" src="./assets/html.png" />
                <img className="skills--img" src="./assets/css.png" />
                <img className="skills--img" src="./assets/bootstrap.png" />
                <img className="skills--img" src="./assets/js.png" />
                <img className="skills--img" src="./assets/react.png" />
                <img className="skills--img" src="./assets/nodejs.png" />
                <img className="skills--img" src="./assets/npm.png" />
                <img className="skills--img" src="./assets/postgre.png" />
                <img className="skills--img" src="./assets/firebase.png" />
                <img className="skills--img" src="./assets/git.png" />
                <img className="skills--img" src="./assets/github.svg" />
            </div>
        </div>
    )
}