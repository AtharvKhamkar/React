import './App.css'
import AddTodo from './components/AddTodo'
import ShowTodo from './components/ShowTodo'


function App() {

  return (
    <>
      <div className='sm:w-[50%] w-full flex flex-col flex-wrap justify-center items-center md:my-20 mx-auto px-2'>
        <h1 className='text-white md:text-5xl text-3xl font-sans font-bold md:text-center text-start my-10'>ToDo Application</h1>
        <AddTodo />
        <ShowTodo/>
      </div>
    </>
  )
}

export default App
