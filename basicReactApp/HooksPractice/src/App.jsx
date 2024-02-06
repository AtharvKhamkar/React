import { useState } from 'react'
import './App.css'
import NameComponent from './components/nameComponent'
import ResultComponent from './components/resultComponent'

function App() {
  const [count, setCount] = useState(0)

  const Increase = () => {
    setCount(count+1)
  }

  const Decrease = () => {
    setCount(count-1)
  }

  return (
    <>
      <NameComponent name="atharv" />
      <ResultComponent marks={10} subject="hindi" />
      <button onClick={Increase}>Increase Marks</button>
      <button onClick={Decrease}>Decrease Marks</button>
    </>
  )
}

export default App
