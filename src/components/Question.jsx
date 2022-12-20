import React, { useState } from "react"
import {nanoid} from "nanoid"
import Answer from "./Answer"

export default function Question(props){
    
    const clickedStyle = {backgroundColor : "#D6DBF5"}

    props.type != "boolean" &&  console.log(props.answers[1].correct + " " + props.answers[0].correct + " " + props.answers[2].correct + " " + props.answers[3].correct)
    let newQuestion = props.question.replace(/&quot;glass&quot;/g, "'")
    newQuestion = newQuestion.replace(/&quot;/g, "'")
    newQuestion = newQuestion.replace(/&#039;/g, "'")
    newQuestion = newQuestion.replace(/&deg;/g, "°")

    return(
        <div className="questionDiv">
            <p className="question">{newQuestion}</p>
            <div className="optionDiv">
                <Answer className="option" 
                    id={props.answers[0].id}
                    onClick={props.function} 
                    clicked={props.answers[0].clicked}
                    answerText={props.answers[0].answer} 
                    gameEnded={props.gameEnded}
                    amICorrect={props.answers[0].correct}/>
                <Answer className="option" 
                    id={props.answers[1].id}
                    onClick={props.function} 
                    clicked={props.answers[1].clicked}
                    answerText={props.answers[1].answer} 
                    gameEnded={props.gameEnded}
                    amICorrect={props.answers[1].correct} />
                {props.type != "boolean" && <Answer className="option" 
                    id={props.answers[2].id}
                    onClick={props.function} 
                    clicked={props.answers[2].clicked}
                    answerText={props.answers[2].answer}
                    gameEnded={props.gameEnded} 
                    amICorrect={props.answers[2].correct}/>}
                {props.type != "boolean" && <Answer className="option" 
                    id={props.answers[3].id}
                    onClick={props.function} 
                    clicked={props.answers[3].clicked}
                    answerText={props.answers[3].answer}
                    gameEnded={props.gameEnded}
                    amICorrect={props.answers[3].correct}/>}
            </div>
            <hr/>
        </div>
    )
}