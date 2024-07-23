import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#FF0000" : "white"
    }
    return (
        <div className="die-face" style={styles} onClick={props.holdDice}>
            <img className="die-num" src={`../public/${props.value}.png`} />
        </div>
    )
}
/* 
<img className="die-num" src={`../public/${props.value}.png`} />
<h2 className="die-num">{props.value}</h2>
*/