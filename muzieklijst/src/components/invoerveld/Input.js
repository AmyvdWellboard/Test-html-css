import React from "react";
import "./Input.css"

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {inputValue: ""}
    }
    update = (event) =>{
        this.setState({inputValue: event.target.value});
    }
    enter = (event) =>{
        if(event.keyCode === 13 && this.state.inputValue !== ""){ 
            this.props.inputpressedEnter(this.state.inputValue);
        }
        console.log(this.props);
        console.log("enter gedrukt");
        
    }
    klick = () =>{
        this.props.inputpressedEnter(this.state.inputValue);
    }
    render(){
        return(
            <>
                <input onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue}className="input"type="text" placeholder="Boodschap" />
                <button onClick={this.klick}className="button">Enter</button>
            </>
        );
    }
}

export default Input