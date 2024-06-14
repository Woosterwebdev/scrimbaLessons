import React from "react"
import Navbar from "./components/Navbar"
import Location from "./components/Location"

export default function App() {
    // const locations = data.map(item => {
    //     return (
    //         <Location 
    //             key={item.id}
    //             {...item}
    //         />
    //     )
    // })
    return (
        <div>
            <Navbar />
            <Location />
        </div>
    )
}
            // <section className="locations-list">
            //     {locations}
            // </section>