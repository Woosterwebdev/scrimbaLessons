import React from "react"
import Banner from "components/Banner/index"

export default function Banners() {
    return(
        <section>
            <h2>Banners</h2>
            <div className="banner-examples">
                <Banner variant="success">
                <Banner.Title>Congratulations!</Banner.Title>
                <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
                </Banner>
                <Banner variant="warning">
                <Banner.Title>Warning!</Banner.Title>
                <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
                </Banner>
                <Banner variant="danger">
                <Banner.Title>Danger!</Banner.Title>
                <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
                </Banner>
                <Banner variant="primary">
                <Banner.Title>Primary</Banner.Title>
                <Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>
                </Banner>
            </div>
            <h3>Syntax</h3>
            <div className="syntax">
              <p><code>{`import Banner from "./components/Banner/index"`}</code></p>
              <p><code>{`<Banner variant="primary">`}</code></p>
              <p><code>{`<Banner.Title>Primary</Banner.Title>`}</code></p>
              <p><code>{`<Banner.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Content>`}</code></p>
              <p><code>{`</Banner>`}</code></p>
            </div>
        </section>
    )
}