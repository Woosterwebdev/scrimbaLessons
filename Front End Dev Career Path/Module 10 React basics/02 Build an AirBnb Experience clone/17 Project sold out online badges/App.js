import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cardElements = data.map(item => 
        <Card 
            key= {item.id}
            img= {item.coverImg}
            rating= {item.stats.rating}
            reviewCount= {item.stats.reviewCount}
            location= {item.location}
            title= {item.title}
            price= {item.price}
        />
        // <Hero />
            )
            return (
        <div>
            <Navbar />
            <section> className="cards-list"
                {cardElements}
            </section>
        </div>
    )
}