import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, decrement, increment, reset } from '../Features/Slices/counterSlice'



function Meter() {
  const result = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)
  const addValue = Number(incrementAmount) || 0
  
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset())
  }
  
  return (
      <div className='bg-blue-300 flex flex-col items-center justify-center h-96 w-80 mx-auto my-72 border bottom-2 border-black rounded-xl'>
          <div className='text-3xl text-white'>{result}</div>
          <div>
              <button className='border-2 border-black rounded-md w-10 h-10 m-5 bg-blue-950 text-white text-2xl' onClick={() => dispatch(increment())}>+</button>
              <button className='border-2 border-black rounded-md w-10 h-10 m-5 bg-blue-950 text-white text-2xl' onClick={()=>dispatch(decrement())}>-</button>
      </div>
      <input className='border-1 border-black rounded-md m-2 p-2 text-blue-950 text-lg' value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} type="text" />
      <button className='text-white text-xl bg-blue-950 border-2 border-black rounded-md m-2 p-2 w-64' onClick={()=> dispatch(addNumber(addValue))}>Add Amount</button>
      <button className='text-white text-xl bg-blue-950 border-2 border-black rounded-md m-2 p-2 w-64' onClick={()=>resetAll()}>Reset All</button>
    </div>
  )
}

export default Meter