import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(15)

  const IncreaseValue = () => {
    if (counter >= 20) {
      counter = counter
    } else {
      counter = counter + 1
    }
    setCounter(counter)
  }

  const DecreaseValue = () => {
    if (counter <= 0) {
      counter = counter
    } else {
      counter=counter - 1
    }
    setCounter(counter)
  }

  return (
    <div>
      <h1>Count is: {counter}</h1>
      <button onClick={IncreaseValue}>Increase Value</button>
      <button onClick={DecreaseValue}>Decrease Value</button>
      <p>{counter}</p>
      <span>{counter}</span>
      <footer>{ counter }</footer>
    </div>
  )
}

export default App
