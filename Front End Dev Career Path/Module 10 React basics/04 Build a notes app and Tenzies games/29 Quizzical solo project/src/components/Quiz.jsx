import React from 'react'
import { nanoid } from 'nanoid'
import { decode } from 'he'

export default function Quiz() {
    const [quiz, setQuiz] = React.useState([])
    const url = 'https://opentdb.com/api.php?amount=5&category=11&difficulty=easy'


    // API fetch request
    React.useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
          const quizData = data.results.map(question => {
            return{
                id: nanoid(),
                correctAnswer: decode(question.correct_answer),
                question: decode(question.question),
                allAnswers: [...question.incorrect_answers, question.correct_answer],
                selectedAnswer: ''
            }
          })
          setQuiz(quizData)
        })
    }, [])

    //Add selected answer to quiz.
    function handleChange(event){
        setQuiz(prevQuiz => prevQuiz.map(question => {
          return question.id === event.target.name ? 
            {...question, selectedAnswer: event.target.value} : 
            question     
        }))
    }
    
    console.log(quiz)
    //Add check for correct answer.
    //Add state for score.

    const questionElements = quiz.map(object => {
        let sortAnswers = object.allAnswers.sort()
        if (sortAnswers.length < 3){
            sortAnswers.sort().reverse()
        }

        let answers = sortAnswers.map(answer => {
            return(
                <div className='answer'>
                    <input type='radio' name={object.id} id={answer} value={answer} onChange={handleChange}></input>
                    <label htmlFor={answer}>{answer}</label>
                </div>
            )
        })
        
        return(
            <div className='question-container'>
                <form>
                    <legend>{object.question}</legend>
                    <div className='answer-container'>
                        {answers}
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




/* All old code from previous structure */

// const questionElements = props.map(prop => {
    //     return(
        //         <div className='question-container'>
        //             <form>
        //                 <legend>{prop.question}</legend>
        //                 <div className='answer-container'>
        //                     <label className='answer'>Cabbage Patch Kids<input type='radio' name='answer'></input></label>
        //                     <label className='answer'>Transformers<input type='radio' name='answer'></input></label>
        //                     <label className='answer'>Care Bears<input type='radio' name='answer'></input></label>
        //                     <label className='answer'>Rubik’s Cube<input type='radio' name='answer'></input></label>
        //                 </div>
        //             </form>
        //             <hr />
        //         </div>
        //     )
        // })

        
        // return(
            //     <div className='quiz-container'>
            //         {questionElements}
            //         <button className='btn check'>Check Answers</button>
            //     </div>
            
            // )



            // return(
            //     <Question
            //         key={object.id}
            //         question={object.question}
            //         answers={object.allAnswers}
            //     />
            // )