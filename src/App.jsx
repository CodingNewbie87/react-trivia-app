import { useState } from 'react'
import './App.css'
import TriviaQuestions from './Questions';
import header from './header';
function App(){
 
const[questionIndex, setQuestionIndex]=useState(0);
const [flipped, setflipped]=useState(false)

function handleClickNext(){setflipped(()=>(false))
  if (questionIndex + 1 > TriviaQuestions.length -1)
    alert('game over');
  else (setQuestionIndex(()=>(questionIndex + 1)))
      }

function handleClickPrev(){setflipped(()=>(false))
  if (questionIndex -1 < 0)
    return
  else (setQuestionIndex(()=>(questionIndex - 1)))
      }

function handleClickShow(){
  setflipped(()=>(setflipped(!flipped)))
}

return(
  <>
{header}
    {!flipped &&
      <div
        onClick={() => { handleClickShow() } }
        className='trivia-card'>
        <div className='front'>
          {TriviaQuestions[questionIndex].question}
        </div>
      </div>}
    {flipped &&
      <div
        onClick={() => { handleClickShow() } }
        className='card-back'>
        {TriviaQuestions[questionIndex].answer}
      </div>}
  <div className='button-container'>   
  <button onClick={handleClickPrev}>Previous Question</button>
  <button onClick={handleClickNext}>Next Question</button></div>
</>    
  )}
  export default App 
