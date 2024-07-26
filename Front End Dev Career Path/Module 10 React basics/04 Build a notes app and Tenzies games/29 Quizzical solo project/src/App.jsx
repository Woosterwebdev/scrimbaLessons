import React from 'react'
import nanoid from 'nanoid'
import Start from './components/Start'
import Quiz from './components/Quiz'

export default function App() {
  const [start, setStart] = React.useState(true)
  const [quiz, setQuiz] = React.useState([data])
  const [correctAnswers, setCorrectAnswers] = React.useState([])



  function startQuiz() {
    setStart(prevStart => !prevStart)
  }

  let data = [
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
  // React.useEffect(() => {
  //   fetch('https://opentdb.com/api.php?amount=5&category=11&difficulty=easy')
  //     .then(res => res.json())
  //     .then(data => setQuiz(data.results))
  // }, [start])

  const questionElements = quiz.map(question => {
    
  })
  
  if (start) {
    return(
      <Start
        startQuiz={() => startQuiz()}
      />
    )
  } else {
    return(
      <Quiz 
        key={nanoid}
        quiz={quiz}
      />
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
      incorrectAnswers={data.incorrect_answers}*/