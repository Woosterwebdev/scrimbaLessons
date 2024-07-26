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
/* <label className='answer'>Cabbage Patch Kids<input type='radio' name='answer'></input></label>
<label className='answer'>Transformers<input type='radio' name='answer'></input></label>
<label className='answer'>Care Bears<input type='radio' name='answer'></input></label>
<label className='answer'>Rubik’s Cube<input type='radio' name='answer'></input></label> */