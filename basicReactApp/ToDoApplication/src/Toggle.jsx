import { useState } from "react"
import AnotherApp from "./AnotherApp"


const Toggle = () => {
    const [state,setState] = useState(true)

    return (
        <div>
            <button onClick={(e)=>setState((!state))}>
                Toggle
            </button>
            {state?<AnotherApp/> :""}
        </div>
    )
}

export default Toggle