import React from "react"
import Menu from "../components/Menu/index"

export default function Menu() {
    const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]
    return(
        <section>
            <h2>Menu</h2>
            <div>
                <Menu>
                    <Menu.Button>Sports</Menu.Button>
                    <Menu.Dropdown>
                        {sports.map(sport => (
                        <Menu.Item key={sport}>{sport}</Menu.Item>
                    ))}
                    </Menu.Dropdown>
                </Menu>
             </div>
            <h3>Syntax</h3>
            <div className="syntax">
                <p><code>{`import Menu from "./components/Menu/index"`}</code></p>
                <p><code>{`<Menu>`}</code></p>
                <p><code>{`<Menu.Button>Sports</Menu.Button>`}</code></p>
                <p><code>{`<Menu.Dropdown> {sports.map(sport => (`}</code></p>
                <p><code>{`<Menu.Item key={sport}>{sport}</Menu.Item>))}`}</code></p>
                <p><code>{`</Menu.Dropdown>`}</code></p>
                <p><code>{`</Menu>`}</code></p>
            </div>
        </section>
    )
}