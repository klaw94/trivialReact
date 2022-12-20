import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuestionPage from './components/QuestionPage'
import EntryPage from './components/EntryPage'

function App() {
  const [quizzStarted, setQuizzStarted] = useState(false)

  function changePage(){
    setQuizzStarted(true);
  }

  return (
    <div className="App">
    {quizzStarted ? <QuestionPage /> : <EntryPage handleClick={changePage}/>}
    </div>
  )
}

export default App
