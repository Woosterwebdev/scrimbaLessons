/* Hard coded temporarily due to api constrains */
const data = [
  {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Entertainment: Film",
      "question": "Leonardo DiCaprio won an Oscar for Best Actor in 2004&#039;s &quot;The Aviator&quot;.",
      "correct_answer": "False",
      "incorrect_answers": [
          "True"
      ]
  },
  {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Entertainment: Film",
      "question": "Brandon Routh plays the titular character in the movie &quot;John Wick&quot;.",
      "correct_answer": "False",
      "incorrect_answers": [
          "True"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Entertainment: Film",
      "question": "This movie contains the quote, &quot;I feel the need ... the need for speed!&quot;",
      "correct_answer": "Top Gun",
      "incorrect_answers": [
          "Days of Thunder",
          "The Color of Money",
          "Cocktail"
      ]
  },
  {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Entertainment: Film",
      "question": "Who directed the Kill Bill movies?",
      "correct_answer": "Quentin Tarantino",
      "incorrect_answers": [
          "Arnold Schwarzenegger",
          "David Lean",
          "Stanley Kubrick"
      ]
  },
  {
      "type": "boolean",
      "difficulty": "easy",
      "category": "Entertainment: Film",
      "question": "In the original script of &quot;The Matrix&quot;, the machines used humans as additional computing power instead of batteries.",
      "correct_answer": "True",
      "incorrect_answers": [
          "False"
      ]
  }
]
import React from 'react'
import { nanoid } from 'nanoid'
import Start from './components/Start'
import Quiz from './components/Quiz'
import Question from './components/Question'

export default function App() {
  const [start, setStart] = React.useState(false)
  const [quiz, setQuiz] = React.useState(data)
  const [correctAnswers, setCorrectAnswers] = React.useState([])

  function startQuiz() {
    setStart(prevStart => !prevStart)
  }

  const questionElements = quiz.map(object => {
    let answers = [...object.incorrect_answers, object.correct_answer]
    return(
      <Question
        key={object.id}
        question={object.question}
        answers={answers}
      />
    )
  })
    
  if (start) {
    return(
      <Start
      startQuiz={() => startQuiz()}
      />
    )
  } else {
    return(
      <div className='quiz-container'>
        {questionElements}
        <button className='btn check'>Check Answers</button>
      </div>
    )
  }  
}
/*

const [start, setStart] = React.useState(true)

function startQuiz() {
  setStart(prevStart => !prevStart)
  }
  
  if (start) {
    return(
      <Start
      startQuiz={() => startQuiz()}
      />
      )
      } else {
        return(
      <Quiz />
      )
      }
      
      question={data.question}
      correctAnswer={data.correct_answer}
      incorrectAnswers={data.incorrect_answers}
      
      
      
      React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=11&difficulty=easy')
          .then(res => {
                if(!res.ok) {
                  throw Error("Something went wrong")
                  }
                res.json()
              })
          .then(data => setQuiz({...data.results), id: {nanoid}})
      }, [start])


*/