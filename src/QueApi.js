import {useState, useEffect, useContext } from "react"
import { QuizContext } from './Context'
import Spinner from "./Spinner"
import Click from "./Click"

const QueApi = () => {

    const { score, setScore, setGameState, limit, difficulty, loading, setLoading } = useContext(QuizContext)

    const [question, setQuestion] = useState([])
    const [answerA, setAnswerA] = useState('')
    const [answerB, setAnswerB] = useState('')
    const [answerC, setAnswerC] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [currQue, setCurrQue] = useState(0)
    const [option, setOption] = useState('')
    
    

    const fectchQuestion = async() =>{
        const res = await fetch(`https://the-trivia-api.com/api/questions?limit=${limit}&difficulty=${difficulty}`)
        const data = await res.json()  

        setQuestion(data[currQue].question)
        setAnswerA(data[currQue].incorrectAnswers[0])
        setAnswerB(data[currQue].incorrectAnswers[1])
        setAnswerC(data[currQue].incorrectAnswers[2])
        setCorrectAnswer(data[currQue].correctAnswer)
          
        setLoading(false)
    }

    useEffect(() => {
        fectchQuestion()

    },[currQue])

   const  finish =() => {
     setGameState('end')
   }

   let randomAnswerOrder = [answerA, answerB, answerC, correctAnswer];  
   let newRandomAnswerOrder = randomAnswerOrder.sort();  
  
   const handleClick = () => {
    if(option === correctAnswer){
     setScore( score + 1)
    }
     setCurrQue(currQue + 1)
     setOption('')

  } 


  return loading ? ( 
        <Spinner/>
  ) : (
    <div className="bg"> 
      <div className="wrapper flex">
      <p className="current">{currQue + 1}/{limit}</p>
        <div className="question">
      <h2>{question}</h2>
      </div>
      <p className="choosen">Option Choosen: {option}</p>
      <div className="answers">
        {newRandomAnswerOrder.map((answer, idx) => (
          <button 
             className='btn'
             key={idx}
             onClick={() => {setOption(answer)}}
             >
             {answer}
          </button>    
        ))}
        </div>      
     </div>
      {currQue !=`${limit - 1}` ? (
          <button
          className="btn-answers-finish" 
          onClick={handleClick}
          >Next Question <Click/>
          </button>
      ):(
          <button
          className="btn-answers-finish" 
          onClick={finish}
          >Finish
          </button>        
        )}
    </div>
  )
}



export default QueApi
