import React from "react"
function ButtonComponent({ incrementCount }) {
    console.log("Inside button count")
    return (
        <button onClick={incrementCount}>
            Click me
        </button>
        
    )
}

export default React.memo(ButtonComponent)