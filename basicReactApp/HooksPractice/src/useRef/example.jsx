import React, { useRef, useState } from "react";
function Example() {
    const [myNum, setMyNum] = useState(0)

    const inputOne = useRef()
    const inputTwo = useRef()
    
    const getNumBox = () => {
        console.log("Hello")
        console.log(inputOne.current.value)
    }

    const getTextBox=() => {
        console.log("world")
        console.log(inputTwo.current.style.backgroundColor="red")
    }
    return (
        <>
            <h2>Learning useRef</h2>
            <input
                ref={inputOne}
            value={myNum}
                type="number"
                onChange={(e)=>setMyNum(e.target.value)}
            
            />
            
            <input
                ref={inputTwo}
            value={myNum}
                type="text"
                onChange={(e)=>setMyNum(e.target.value)}
            
            />
            <h3>Value is:{myNum}</h3>
            
            <button onClick={()=>getNumBox()}>Rupees</button>
            <button onClick={()=>getTextBox()}>Dollars</button>
        </>
    )
}

export default Example