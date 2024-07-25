import React from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'

export default function App() {
  return(
    <Quiz />
  )  
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
}*/