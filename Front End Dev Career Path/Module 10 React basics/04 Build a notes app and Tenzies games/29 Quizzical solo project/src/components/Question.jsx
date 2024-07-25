import React from 'react'

export default function Question() {
    return(
        <div className='question-container'>
            <form>
                <legend>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</legend>
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
}