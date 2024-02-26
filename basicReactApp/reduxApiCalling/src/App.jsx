import { useDispatch, useSelector } from "react-redux"
import './App.css'
import { fetchTodos } from './features/slices/todoSlice'

function App() {

  const dispatch = useDispatch()
  const allTodos = useSelector(state => state)
  console.log(allTodos)
  
  return (
    <>
      <div>
        <button onClick={()=> dispatch(fetchTodos())}>
          Fetch
        </button>
        {
          allTodos.todo.data && allTodos.todo.data.map((todo) => (
            <li key={todo.id}>{ todo.title}</li>
          ))
        }
        
      </div>
    </>
  )
}

export default App
