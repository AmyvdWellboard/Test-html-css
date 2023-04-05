/*import components*/
import Input from "../Input/Input";
import ResultaatGrafiek from "../ResultaatGrafiek/ResultaatGrafiek";
import WaardenObject from "../../Data/Waarden";
import React from "react";
import "./Invoerformulier.css";
class Invoerformulier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            waardens: [],
        }

    }

    //runt na het aanmaken en het tekenen van een component
    componentDidMount() {
        this.setState({
            waardens: WaardenObject.waardens,
        })
    }

    componentDidUpdate() {
        
    }

    update = () => {
        let tempArray = this.state.waardens;
        let combinedArray = tempArray.concat([
            {
                name: "",
                id: 100,
            },
        ]);
        this.setState({
            waardens: combinedArray,
        })

    }
    

    inputPressedEnter = (inputFromInputComponent) => {
        let toBeAdded = [
            {
                name: inputFromInputComponent,
                id: 100,
            },
        ]
        let mergedArray = toBeAdded.concat(this.state.waardens);
        this.setState({
            waardens: mergedArray,
        })
        console.log(inputFromInputComponent);
    };


    render() {

    
        const resultaatGrafiek = WaardenObject.map(waardenData => {
            return <ResultaatGrafiek getalwaarde={waardenData.name} eenheid={waardenData.waardenBenoeming} key={waardenData.id}></ResultaatGrafiek>
        });

        
        return (
            <article className="InvoerFormulier">
                <header className="Invoerformulier__header">
                    <h1 className="InvoerFormulier__title">Test je waarde hier</h1>
                    <p className="InvoerFormulier__subtext">Wil je graag waardes testen? Dat kan nu hier gratis.</p>
                    
                </header>
                <ul>{resultaatGrafiek}</ul>
                <Input inputpressedEnter={this.inputPressedEnter} />
            </article>

        )
    }
}

export default Invoerformulier;