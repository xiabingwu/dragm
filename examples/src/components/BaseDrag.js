import React from "react"
import DragM from "../dragm/index"

export default class BaseDrag extends React.Component{
    render(){
        return (<DragM><div style={{width:'70px',color:'red'}}>我可拖动</div></DragM>)
    }
}