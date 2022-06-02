import React from 'react'
import {useState, useContext} from 'react'
import { Questions } from './Questions'
import { QuizContext } from './Context'


const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext)
  const [currQuestion, setCurrQuestion] = useState(0)
  const [option, setOption] = useState('')

  const nextQuestion = () =>{
      if(Questions[currQuestion].answer === option){
        setScore(score + 1)
      }
      setCurrQuestion(currQuestion + 1) 
    
  }

  const finishQuiz = () => {
    if(Questions[currQuestion].answer === option){
        setScore(score + 1)
      }
    setGameState('end')
  }

  return (
    <div>Quiz
        <h2>{Questions[currQuestion].que}</h2>
        <button onClick={()=> setOption('a')}>{Questions[currQuestion].a}</button>
        <button onClick={()=> setOption('b')}>{Questions[currQuestion].b}</button>
        <button onClick={()=> setOption('c')}>{Questions[currQuestion].c}</button>
        <button onClick={()=> setOption('d')}>{Questions[currQuestion].d}</button>

        {currQuestion === Questions.length -1 ? (
         <button onClick={finishQuiz()}>Finish</button>   
        ):(
            <button
                onClick={nextQuestion}
            > Next</button>
        )}

    </div>
  )
}

export default Quiz