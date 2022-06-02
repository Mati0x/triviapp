import { QuizContext } from './Context'
import {useContext} from 'react'


const End = () => {
  const { score, limit, difficulty } = useContext(QuizContext)

 
  return (
    <div className='bg'>
      <div className="wrapper pd-1 flex center">
        <h3>Mode: {difficulty}</h3>
        <h2 className={score >=3 ? 'congrats' : 'try-again'}>You have {score} correct answers out of {limit}</h2>
      <button 
        onClick={() => window.location.reload()}
        className="btn start end">
        Play Again!
        </button>
      </div>
    </div>
  )
}

export default End