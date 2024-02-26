import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/slices/todoSlice';

function AddTodo() {
  const [todoText,setTodoText] = useState('')
  const dispatch = useDispatch();
  const insertTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoText))
    setTodoText('')
  }
  return (
    <div className='w-full mb-12' >
          <form className='flex flex-row flex-wrap justify-center md:w-full' onSubmit={insertTodo}>
        <input className='md:w-[60%] w-[70%]  rounded-l-lg  p-2 focus:border  focus:border-solid focus:outline-none focus:ring-2 focus:ring-sky-950 placeholder:italic placeholder:text-slate-400'
          type="text"
          placeholder='  Enter Todo'
          value={todoText}
          onChange={(e)=>setTodoText(e.target.value)}
        />
              <button className='text-white bg-pink-800 text-center px-2 md:text-2xl text-base font-sans font-bold rounded-r-lg focus:bg-pink-950' type='submit'>Add</button>
          </form>
    </div>
  )
}

export default AddTodo