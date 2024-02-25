import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import './App.css'
import { decrement, increment } from './features/slices/counterSlice'

function App() {

  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <h1>The count is {counter}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App
