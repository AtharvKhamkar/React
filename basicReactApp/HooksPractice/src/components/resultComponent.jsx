import React, { useMemo } from "react"
const ResultComponent = ({ marks,subject }) => {
    console.log('Inside result component')
    const percentageMarks = useMemo(() => {
        console.log("Inside the use memo")
        
        
        return (marks*100)/100
        
    },[marks])
    return (
        <>
            <h2>Result is :{marks}</h2>
            <h2>Percentage is :{percentageMarks}%</h2>
            <h2>Subject is:{ subject}</h2>
        </>
    )
}

export default ResultComponent