import { QuizContext } from './Context'
import { useContext } from 'react'

const Start = () => {
  const {setGameState, setLimit, setDifficulty} = useContext(QuizContext)

  const handleStartClick = () =>{
    setGameState('quiz')
  }

  const handleChange = (e) =>{
      const toNumber = parseInt(e.target.value)
      setLimit(toNumber)
  }

  const handleDifficulty = (e) =>{
      setDifficulty(e.target.value)
  }

  const options = [
      {value: 4, label:'5'},
      {value: 10, label:'10'},
      {value: 15, label:'15'},
      {value: 25, label:'25'}
  ]
  const difficultySelection = [
      {value: 'easy', label:'easy'},
      {value: 'medium', label:'medium'},
      {value: 'hard', label:'hard'}
  ]

  return (
    <div className='bg'>
        <div className="wrapper flex ">
            <h2 className='title '>Mati TriviApp</h2>
                <div className='flex align-them'>
                <div>
                    <h3>Select Amount of Questions:</h3>
                    <select
                        className='selections'  
                        onChange={handleChange}
                    >
                        {options.map((option, idx) => (
                            <option
                            className='red' 
                            key={idx} 
                            value={option.value}>{option.label} 
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <h3>Select MODE:</h3>
                    <select 
                        className='selections' 
                        onChange={handleDifficulty}
                    >
                        {difficultySelection.map((difficulty, idx) => (
                            <option
                            
                            key={idx} 
                            value={difficulty.value}>{difficulty.label} 
                            </option>
                        ))}
                    </select>
            </div>
            <button 
            className='btn start'
            onClick={handleStartClick}
            >Start        
            </button>
        </div>
        </div>
    </div>
  )
}

export default Start