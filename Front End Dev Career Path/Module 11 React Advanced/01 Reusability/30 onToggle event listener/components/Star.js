import React from "react"
import Toggle from "./Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"

export default function Star({ onChange }) {
    /**
     * Challenge:
     * 1. Receive a prop called onChange and pass it to the
     *    Toggle's onToggle function
     * 2. Add an onChange prop to the Star component instance
     *    in index.js that just runs a console.log() for now.
     */
    return (
        <Toggle onToggle={onChange}>
            <Toggle.Button>
                <Toggle.On>
                    <BsStarFill className="star filled" />
                </Toggle.On>
                <Toggle.Off>
                    <BsStar className="star" />
                </Toggle.Off>
            </Toggle.Button>
        </Toggle>
    )
}