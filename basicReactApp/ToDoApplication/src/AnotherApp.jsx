import { useEffect, useState } from "react"


function AnotherApp() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("Component Mounted") 
        
        return function () {
            console.log("Component Unmounted")
        }
    }, [])
    
    useEffect(() => {
        console.log("Component updated")
    },[counter])
    
    const Increment = () => {
        setCounter(counter+1)
    }

    const Decrement = () => {
        setCounter(counter-1)
    }
    return (
        <div>
            <div>
                {counter}
            </div>
            <button style={{backgroundColor:"grey",margin:"2px"} } onClick={Increment}>
                Inc
            </button>
            <button style={{backgroundColor:"grey",margin:"2px"} } onClick={Decrement}>
                Dec
            </button>
        </div>
    )
}

export default AnotherApp