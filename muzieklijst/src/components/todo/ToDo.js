import { render } from "@testing-library/react";
import React from "react";
import Item from "../Item/Item";
import Input from "../invoerveld/Input";
import tasksObject from "../../data/Tasks";
import "./ToDo.css";
class ToDo extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                tasks: [],
            }
           
        }

        //runt na het aanmaken en het tekenen van een component
        componentDidMount(){
            this.setState({
                tasks: tasksObject.tasks,
            })
        }
        //componentDidUpdate runt na het updaten van de state
        componentDidUpdate(){
        }
        
        update = () => {
          
            let tempArray = this.state.tasks;
            let combinedArray = tempArray.concat([
                {
                    name: "",
                    done: false,
                    id:8
                },
            ]);
            
            this.setState({
                tasks: combinedArray,
            })
           
        }

        inputPressedEnter = (inputFromInputComponent) =>{
            console.log("vanuit to do:" + inputFromInputComponent);
            let toBeAdded = [
                {
                    name: inputFromInputComponent,
                    artiest: "",
                    done: false,
                    id:100
                },
            ]
          let mergedArray = toBeAdded.concat(this.state.tasks);
           this.setState({
            tasks: mergedArray,
           })

        }
     /*
     listItems = this.state.tasks.map( task => {
        return <Item key={task.id} name={task.name} done={task.done}/>
    });
    */

    render(){
        let items = this.state.tasks.map(task =>{
            return <Item artiest={task.artiest}done={task.done}name={task.name} key={task.id}></Item>
        });
       
        return(
            <article  className="todo">
                <header className="todo__header">
                    <h1 className="todo__heading">MuziekLijst</h1>
                </header>
                <ul className="todo__list">
                    {items}
                </ul>
                <Input inputpressedEnter={this.inputPressedEnter}/>
            </article>
        )
    }
    
}

export default ToDo;