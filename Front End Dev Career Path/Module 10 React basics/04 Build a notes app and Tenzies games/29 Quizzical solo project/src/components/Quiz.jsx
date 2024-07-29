import React from 'react'
import Question from './Question'
import { nanoid } from 'nanoid'
import { decode } from 'he'

export default function Quiz() {
    const [correctAnswers, setCorrectAnswers] = React.useState([])
    const [quiz, setQuiz] = React.useState([])
    const url = 'https://opentdb.com/api.php?amount=5&category=11&difficulty=easy'

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

    console.log(quiz)
      
    const questionElements = quiz.map(object => {
        return(
            <Question
                key={object.id}
                question={object.question}
                answers={object.allAnswers}
            />
        )
    })

    return(
        <div className='quiz-container'>
            {questionElements}
            <button className='btn check'>Check Answers</button>
        </div>
    )
}
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