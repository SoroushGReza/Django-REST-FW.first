import React from 'react'

function Lesson8EventsFunctional() {
    function clickHandler() {
        console.log("Clicked the functional button")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click Me - Functional component</button>
    </div>
  )
}

export default Lesson8EventsFunctional