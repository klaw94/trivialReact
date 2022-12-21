import React, { useState } from "react"
import Answer from "./Answer"

export default function Question(props){
    
    const clickedStyle = {backgroundColor : "#D6DBF5"}

    props.type != "boolean" &&  console.log(props.answers[1].correct + " " + props.answers[0].correct + " " + props.answers[2].correct + " " + props.answers[3].correct)
    let newQuestion = props.question.replace(/&quot;glass&quot;/g, "'")
    newQuestion = newQuestion.replace(/&quot;/g, "'")
    newQuestion = newQuestion.replace(/&#039;/g, "'")
    newQuestion = newQuestion.replace(/&deg;/g, "°")

    const visualAnswers = props.answers.map(oldAnswer =>
        <Answer className="option" 
            id={oldAnswer.id}
            onClick={props.function} 
            clicked={oldAnswer.clicked}
            answerText={oldAnswer.answer} 
            gameEnded={props.gameEnded}
            amICorrect={oldAnswer.correct}
        />
    )

    return(
        <div className="questionDiv">
            <p className="question">{newQuestion}</p>
            <div className="optionDiv">
                {visualAnswers}
            </div>
            <hr/>
        </div>
    )
}