import React from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'

export default function App() {
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
            
const [formData, setFormData] = React.useState(selectedAnswer)
            
            */