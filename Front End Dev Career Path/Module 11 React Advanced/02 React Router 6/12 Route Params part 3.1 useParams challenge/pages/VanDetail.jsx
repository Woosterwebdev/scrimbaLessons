import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    /**
     * Challenge part 1:
     * Re-write what I just wrote and console log the params object
     */
    const params = useParams()
    console.log(params)
    
    return <h1>Van detail page goes here</h1>
}