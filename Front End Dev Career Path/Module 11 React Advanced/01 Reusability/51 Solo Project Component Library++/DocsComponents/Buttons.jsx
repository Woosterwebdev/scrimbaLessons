import React from "react"
import Button from "../components/Button/Button"

export default function Buttons() {
    return(
        <section>
            <h2>Buttons</h2>
            <div>
                <h3>Sizes</h3>
                    <div className="buttons-size">
                        <Button size="sm" className="">Log in with Google</Button>
                        <Button size="lg" className="">Log in with Google</Button>
                    </div>
                <h3>Variants</h3>
                    <div className="buttons-variants">
                        <Button size="lg" className="success">Log in with Google</Button>
                        <Button size="lg" className="warning">Log in with Google</Button>
                        <Button size="lg" className="danger">Log in with Google</Button>
                    </div>
            </div>
            <h3>Syntax</h3>
            <div className="syntax">
                <p><code>{`import Button from "./components/Button/Button"`}</code></p>
                <p><code>{`<Button size="lg" className="success">Log in with Google</Button>`}</code></p>
            </div>
        </section>
    )
}