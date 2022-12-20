import React, { useState, useEffect } from "react";
import Question from "./Question";
import {nanoid} from "nanoid"

export default function QuestionPage(){
    const [questionData, setQuestionData] = useState([])
    const [gameEnded, setGameEnded] = useState(false)
    const [myCorrectAnswers, setMyCorrectAnswers] = useState(0)

  useEffect(function() {
    callTheApi()
  }, [])

console.log(questionData)
  const visualQuestions = questionData.map(data => {     
       return (<Question key={nanoid()} type={data.type} question={data.question} answers={data.answers} function={clickAnswer} gameEnded={gameEnded}/>)
  })

  function callTheApi(){
    fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data => {
            const expandedArray = data.results.map(question =>(
              {...question, 
                answers: [...question.incorrect_answers, question.correct_answer]})) 
                
            const expandedAnswersArray = expandedArray.map(question =>{
              shuffle(question.answers)
               return {...question, 
                answers : question.answers.map(oldAnswer =>({id : nanoid(), 
                 answer : oldAnswer, 
                 clicked : false,
                 correct : oldAnswer === question.correct_answer ? true : false
                }))
          }})  
           setQuestionData(expandedAnswersArray)
        })
  }
  
  function clickAnswer(answerId){
    setQuestionData(questions =>{
      //I map the questions and in each question I map the answers
      const newQuestions = questions.map(oldQuestions =>{
        const clickedAnswers = oldQuestions.answers.map(oldAnswer =>{
          //I click the answer with the id of the parameter
          if(oldAnswer.id === answerId){
            return {...oldAnswer, clicked : !oldAnswer.clicked}  
          } else if(oldAnswer.clicked){
            //for all the other answers if it they are clicked, I check if they belong at the same answered array as the new clicked answer
            for (let i = 0; i < oldQuestions.answers.length; i++){
              //if they are I unclick them
              if (oldQuestions.answers[i].id === answerId){
                return {...oldAnswer, clicked : false}
              }
            }
            //otherwise I return them as they were
            return {...oldAnswer} 
          } else{
            return {...oldAnswer}
          }
        })
        return {...oldQuestions, answers : clickedAnswers}
      })
      return newQuestions
    })
  }

  function shuffle(array) {
    // for 1000 turns
    // switch the values of two random cards
    for (let i = 0; i < 20; i++) {
      let location1 = Math.floor(Math.random() * array.length);
      let location2 = Math.floor(Math.random() * array.length);
      let tmp = array[location1];
  
      array[location1] = array[location2];
      array[location2] = tmp;
    }
  }

  function checkAnswers(){
    setGameEnded(true)
    let counterCorrectAnswers = 0;
    for (let i = 0; i < questionData.length; i++){
      for (let x = 0; x < questionData[i].answers.length; x++){
        if (questionData[i].answers[x].correct === true && questionData[i].answers[x].clicked === true){
          counterCorrectAnswers++
        }
      }
    }
    setMyCorrectAnswers(counterCorrectAnswers)
  }

  function resetGame(){
    callTheApi();
    setMyCorrectAnswers(0)
    setGameEnded(false)
  }


    return(
        <div className="questionPage">
           {visualQuestions}
           {gameEnded ? 
            <div className="scoreDiv">
              <span className="score">You scored {myCorrectAnswers}/5 correct answers</span>
              <button className="playAgainButton" onClick={resetGame}>Play again</button> 
            </div>
            : 
            <button onClick={checkAnswers}>Check answers</button>}
        </div>
    )
}

