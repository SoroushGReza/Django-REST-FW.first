import React from "react";

const FunctionalGreetingWithPropsLesson1 = (props) => {
    console.log(props);
    return <h1>Hello, {props.name}! I see you are {props.age} years old, {props.greeting}</h1>
}
export default FunctionalGreetingWithPropsLesson1;