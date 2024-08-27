import React from "react"
import Badge from "../components/Badge/Badge"

export default function Badges() {
    return(
        <section>
            <h2>Badges</h2>
            <h3>Square</h3>
            <div className="badge-examples">
              <Badge style="square" variant="success">Success</Badge>
              <Badge style="square" variant="warning">Warning</Badge>
              <Badge style="square" variant="danger">Danger</Badge>
              <Badge style="square" variant="primary">Primary</Badge>
              <Badge style="square" variant="indigo">Indigo</Badge>
              <Badge style="square" variant="purple">Purple</Badge>
              <Badge style="square" variant="pink">Pink</Badge>
            </div>
            <h3>Pill</h3>
            <div className="badge-examples">
              <Badge style="pill" variant="success">Success</Badge>
              <Badge style="pill" variant="warning">Warning</Badge>
              <Badge style="pill" variant="danger">Danger</Badge>
              <Badge style="pill" variant="primary">Primary</Badge>
              <Badge style="pill" variant="indigo">Indigo</Badge>
              <Badge style="pill" variant="purple">Purple</Badge>
              <Badge style="pill" variant="pink">Pink</Badge>
            </div>
            <h3>Syntax</h3>
            <div className="syntax">
              <p><code>{`import Badge from "./components/Badge/Badge"`}</code></p>
              <p><code>{`<Badge style="pill" variant="success">Success</Badge>`}</code></p>
            </div>
        </section>
    )
}