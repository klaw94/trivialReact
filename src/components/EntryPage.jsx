import React from "react";

export default function EntryPage(props){
    return(
        <div className="entryPage">
            <h1>Quizzical</h1>
            <h3>Your favourite trivial game</h3>
            <button onClick={props.handleClick}>Start quiz</button>
        </div>
    )
}