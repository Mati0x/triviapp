import {useState, useEffect } from "react"
// import Item from "./Item"


// const Questions = () => {


//     const [question, setQuestion] = useState([])
// //     // const [answer, setAnswer] = useState('')

//     const fectchQuestion = async() =>{
//         const res = await fetch('https://the-trivia-api.com/api/questions?limit=2')

//         const data = await res.json()
       
//         setQuestion(data)
        
//     }

//     useEffect(() => {
//         fectchQuestion()

//     },[])


//   return (
//     <div>Questions
//       {question.map((question, idx) => (
//        <Item
//         key={question.id}
//         question={question}
//         idx={idx}
//        >  
//        </Item>
//       ))}
//         <p></p>
//         <p></p>
//     </div>
//   )
// }

// export default Questions

export const Questions = [
  {
    que: 'what is 1 + 3',
    a: '4',
    b: '5',
    c: '6',
    d: '9',
    answer: 'a',
  },
  {
    que: 'what is 1 + 5',
    a: '19',
    b: '6',
    c: '5',
    d: '9',
    answer: 'b',
  },
  {
    que: 'what is 1 + 5',
    a: '19',
    b: '6',
    c: '5',
    d: '9',
    answer: 'b',
  },
  {
    que: 'what is 1 + 5',
    a: '19',
    b: '6',
    c: '5',
    d: '9',
    answer: 'b',
  },
  {
    que: 'what is 1 + 5',
    a: '19',
    b: '6',
    c: '5',
    d: '9',
    answer: 'b',
  },
  {
    que: 'what is 1 + 5',
    a: '19',
    b: '6',
    c: '5',
    d: '9',
    answer: 'b',
  },
  {
    que: 'what is 1 + 10',
    a: '4',
    b: '5',
    c: '6',
    d: '11',
    answer: 'd',
  },

]