import React from "react"

export default function Box(props) {
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <button 
            style={styles} 
            className="box"
            onClick={()=>props.toggle(props.id)}
            >
        </button>
    )
}

/*
onClick={props.toggle} will noth tell us what box was clicked but run toggle
inside of an "event" fuction and pass a props of id to use as a praram in 
toggle function and boom. You know get the id of the box clicked.
*/