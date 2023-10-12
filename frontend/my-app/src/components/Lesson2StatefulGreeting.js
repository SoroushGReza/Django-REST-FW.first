import React from "react";

class Lesson2StatefulGreeting extends React.Component {
    render() {
        return <h1>Hello  {this.props.name}, {this.props.greeting}</h1>
    }
}

export default Lesson2StatefulGreeting;