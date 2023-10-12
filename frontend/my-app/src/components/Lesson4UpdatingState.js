import React from "react";

class Lesson4UpdatingState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Now we will learn how to ",
            buttonText: "Exit",
        };  
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye ",
            buttonText: "Exit",
        });
        
        console.log(this.state.introduction);
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.task}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default Lesson4UpdatingState;