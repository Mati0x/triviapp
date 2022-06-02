import React from 'react'

const Item = ( {question, idx} ) => {
  const quizData = [
      {
          question: question.question,
          a: question.incorrectAnswers[0],
          b: question.incorrectAnswers[1],
          c: question.incorrectAnswers[2],
          d: question.correctAnswer,
          correct: question.correctAnswer,
      },
    //   {
    //      question: question[1].question,
    //       a: question[1].incorrectAnswers[0],
    //       b: question[1].incorrectAnswers[1],
    //       c: question[1].incorrectAnswers[2],
    //       d: question[1].correctAnswer,
    //       correct: question[1].correctAnswer
    //   }
     
  ]
let currentQuiz = 0
let score = 0

console.log(quizData[0].question)
console.log(quizData[0].a)
console.log(quizData)

const handleSubmit = (e) => {
    e.preventDefault()

}

  return (
    <div>
        <h3>{question.question}</h3>
        <p>{score}</p>
    <form>
        <ul>
            <li>
                <input type="radio" name='answer' id='a'/>
                <label htmlFor='a'>{question.incorrectAnswers[0]}</label>
            </li>
            <li>
                <input type="radio" name='answer' id='b'/>
                <label htmlFor='b'>{question.incorrectAnswers[1]}</label>
            </li>
            <li>
                <input type="radio" name='answer' id='c'/>
                <label htmlFor='c'>{question.correctAnswer}</label>
            </li>
        </ul>

        <button onClick={handleSubmit}>submit</button>
    </form>
    </div>
  )
}

export default Item