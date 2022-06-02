import './App.css';
import Start from './Start';
import End from './End';
import {useState} from 'react'
import { QuizContext } from './Context'
import QueApi from './QueApi';

function App() {
  const [gameState, setGameState] = useState('start')
  const [score, setScore] = useState(0)
  const [limit, setLimit] = useState(5)
  const [difficulty, setDifficulty] = useState('easy')
  const [loading, setLoading] = useState(true)

  return (

    <div>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore, limit, setLimit, difficulty, setDifficulty, loading, setLoading }}>
        {gameState === 'start' && <Start/>}
        {gameState === 'quiz' && <QueApi/>}
        {gameState === 'end' && <End/>}
      </QuizContext.Provider>
      
    </div>
  );
}

export default App;
