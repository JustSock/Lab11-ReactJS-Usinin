import React from "react";

function MainBlock(props){
    return(
        <div className="main-block">
            <div className="main-img"><img src={props.img}/></div>
            <h4 className="main-block-header">{props.title}</h4>            
            <p className="main-block-text">{props.text}</p>
        </div>
    );
}

export default MainBlock;