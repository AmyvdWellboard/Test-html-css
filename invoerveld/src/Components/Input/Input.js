import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: [] }
    }

    update = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    enter = (event) => {
        if (event.keyCode === 13 && this.state.inputValue !== "") {
            this.props.inputpressedEnter(this.state.inputValue);
        }
        event.preventDefault();
               
    }

    klick = (event) => {
        this.props.inputpressedEnter(this.state.inputValue); 
        event.preventDefault();       
    }

    render() {
        return (
            <>
                <form className="InvoerFormulier__formulier">
                    <label htmlFor="" className="InvoerFormulier__formulier__label"></label>
                    <input type="text" className="InvoerFormulier__formulier__input" placeholder="Vul hier je waarde in..." onKeyUp={this.enter} onChange={this.update} value={this.state.inputValue}/>
                    <button className="InvoerFormulier__formulier__button" onClick={this.klick}>Submit</button>

                </form>
            </>
        )
    }
}

export default Input  