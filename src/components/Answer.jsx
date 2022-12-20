import React from "react";

export default function Answer(props){
    let clickedStyle
    let normalStyle

    function doNothing(){
        console.log("the game has ended")
    }
    
    let newAnswer = props.answerText.replace(/&quot;glass&quot;/g, "'")
    newAnswer = newAnswer.replace(/&quot;/g, "'")
    newAnswer = newAnswer.replace(/&#039;/g, "'")
    newAnswer = newAnswer.replace(/&deg;/g, "°")

    if (!props.gameEnded){
       clickedStyle  = {backgroundColor : "#D6DBF5",
        border : "none"}
    } else if(props.amICorrect){
        clickedStyle = {backgroundColor : "#94D7A2", border : "none"}
    } else {
        clickedStyle = {backgroundColor : "#F8BCBC",
    border: "none", color : "#ADADAD"}
    }

    if(!props.gameEnded){
        normalStyle  = {backgroundColor : "white"}
    }else if(props.amICorrect){
        normalStyle = {backgroundColor : "#94D7A2",  border : "none"}
    } else if (!props.amICorrect){
       normalStyle = {border: "1px solid #ADADAD", color : "#ADADAD"}
    }

    return(
        <div className="option" 
            onClick={!props.gameEnded ? ()=>props.onClick(props.id) : doNothing} 
            style={props.clicked ? clickedStyle : normalStyle}>  
            {newAnswer}
        </div>               
    )
}