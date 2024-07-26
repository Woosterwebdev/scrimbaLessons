import React from 'react'
import{ decode } from 'he'

export default function Question(props) {
    let shuffleAnswers = props.answers.sort()
    if (shuffleAnswers.length < 3){
            shuffleAnswers.sort().reverse()
        }

    let answers = shuffleAnswers.map(answer => {
        return(
            <label className='answer'>{decode(answer)}<input type='radio' name='answer'></input></label>
        )
    })
    return(
        <div className='question-container'>
            <form>
                <legend>{decode(props.question)}</legend>
                <div className='answer-container'>
                    {answers}
                </div>
            </form>
            <hr />
        </div>
    )
}


// Needs ids for keys
// Needs "selected" state and styling
// Needs score state and Play again feature
// Needs API fetch reinstated (temporarily commented out so as to not exceed API calls)