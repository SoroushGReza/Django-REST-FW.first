import React from "react";

class Lesson5StatefulGreetingWithCallback extends React.Component {

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
            buttonText: "Enter",
        }, () => {
        console.log('new state', this.state.introduction);
        console.log('new state', this.state.buttonText)
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText)
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

export default Lesson5StatefulGreetingWithCallback;