import React, { useCallback, useEffect, useRef, useState } from "react";

function Practice() {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")

    const copyPassword = useRef(null)
    
    const generatePassword  = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "~`!@#$%^&*()_+={[]}:?/<,-"
        
        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, numberAllowed, charAllowed, setPassword])
    
    const accessPassword = useCallback(() => {
        copyPassword.current.select()
        copyPassword.current.setSelectionRange(0, 999)
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
        generatePassword()
    },[length,numberAllowed,charAllowed,generatePassword])
    
    return (
        <>
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500 py-2'>
                <h1 className="text-white text-center my-3">Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        className='outline-none w-full py-1 px-3'
                        type="text"
                        value={password}
                        placeholder="Password"
                        ref={copyPassword}
                        readOnly
                    />
                    <button
                        onClick={accessPassword}
                        className='text-white outline-none bg-blue-400 px-3 py-0.5 shrink-0'>
                        Copy
                    </button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input type="range"
                            min={6}
                            max={100}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e)=>{setLength(e.target.value)}}
                        />
                        <label htmlFor="Length">Length : { length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            name="NameAllowed"
                            defaultChecked={numberAllowed}
                            id="numberInput"
                            onChange={(e)=>setNumberAllowed((prev)=>!prev)}
                        />
                        <label htmlFor="numberAllowed">Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            name="charAllowed"
                            defaultChecked={charAllowed}
                            id="charAllowed"
                            onChange={(e)=>setCharAllowed((prev)=>!prev)}
                        />
                        <label htmlFor="charAllowed">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
    
    
}

export default Practice