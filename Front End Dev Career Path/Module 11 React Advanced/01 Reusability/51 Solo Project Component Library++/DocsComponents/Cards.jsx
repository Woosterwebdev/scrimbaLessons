import React from "react"
import Card from ".../components/Card/index"

export default function Cards() {
    return(
        <section>
            <h2>Cards</h2>
            <div className="card-section">
                <Card>
                    <Card.Icon cardIcon="cloudUpload" />
                    <Card.Title>Easy Deployment</Card.Title>
                    <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
                </Card>
                <Card>
                    <Card.Icon cardIcon="cloudUpload" />
                    <Card.Title>Easy Deployment</Card.Title>
                    <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
                </Card>
                <Card>
                    <Card.Icon cardIcon="cloudUpload" />
                    <Card.Title>Easy Deployment</Card.Title>
                    <Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>
                </Card>
            </div>
            <h3>Syntax</h3>
            <div className="syntax">
              <p><code>{`import Card from "./components/Card/index"`}</code></p>
              <p><code>{`<Card>`}</code></p>
              <p><code>{`<Card.Icon><img className="card-icon" src="./public/cloudUpload.png" /></Card.Icon>`}</code></p>
              <p><code>{`<Card.Title>Easy Deployment</Card.Title>`}</code></p>
              <p><code>{`<Card.Content>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Content>`}</code></p>
              <p><code>{`</Card>`}</code></p>
            </div>
      </section>
    )
}