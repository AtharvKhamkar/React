import React, { useCallback, useState } from "react"
import ButtonComponent from "./buttonComponent"

function CounterComponent() {
    const [count, setCount] = useState(0)

    
    
    const incrementCount = useCallback(() => {
        setCount(prevCount => prevCount+1)
    }, [])
    
    return (
        <>
            <h2>{count}</h2>
            <ButtonComponent incrementCount={ incrementCount} />
        </>
    )
}

export default CounterComponent