import React from 'react'
import Question from './Question'

export default function Quiz(props) {
    const questionElements = props.map(prop => {
        return(
            <div className='question-container'>
                <form>
                    <legend>{prop.question}</legend>
                    <div className='answer-container'>
                        <label className='answer'>Cabbage Patch Kids<input type='radio' name='answer'></input></label>
                        <label className='answer'>Transformers<input type='radio' name='answer'></input></label>
                        <label className='answer'>Care Bears<input type='radio' name='answer'></input></label>
                        <label className='answer'>Rubik’s Cube<input type='radio' name='answer'></input></label>
                    </div>
                </form>
                <hr />
            </div>
        )
    })

    return(
        <div className='quiz-container'>
            {questionElements}
            <button className='btn check'>Check Answers</button>
        </div>
        
    )
}