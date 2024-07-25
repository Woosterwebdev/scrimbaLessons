import React from 'react'
import Question from './Question'

export default function Quiz() {
    return(
        <div className='quiz-container'>
            <Question />
            <button className='btn check'>Check Answers</button>
        </div>
        
    )
}