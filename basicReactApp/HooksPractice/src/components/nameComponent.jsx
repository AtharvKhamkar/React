import React, { useMemo } from "react"
const NameComponent = ({ name }) => {
    console.log("Inside name component")
    const nameSaver = useMemo(() => {
        console.log("Inside the name useMemo")
        return name
    },[name])
    return (
        <h2>Name is :{ nameSaver}</h2>
    )
}

export default NameComponent