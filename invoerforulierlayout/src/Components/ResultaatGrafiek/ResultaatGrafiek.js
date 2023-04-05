import React from "react";
import "./ResultaatGrafiek.css";

class ResultaatGrafiek extends React.Component{

    constructor(props){
        super(props);
        this.className = "todo__item";
        this.state = {done: false};
    };
    componentDidMount(){
        this.setState({done: this.props.done})
    }

    onItemClick = () =>{
        this.setState({done: !this.state.done});
       
    }

    render(props){
        if(this.state.done){
            this.className = "todo__itme todo__item--done";
        }
        else{
            this.className = "todo__item";
        }
        return (
            <>
                <li className="getalwaarden">{this.props.getalwaarde} {this.props.eenheid}</li>
            </>
        )
    }
}

export default ResultaatGrafiek;