import { useEffect, useState } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/todoforms'
import TodoItem from './components/todoitem'

function App() {
const [todos,setTodos]= useState([])

 const addTodo=(todo)=>{
  setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev]) //use spread operator
 }
const updateTodo=(id,todo)=>{
setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id==id? todo :prevTodo )))

}

const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
}

const toggleComplpete=(id)=>{
  setTodos((prev)=> prev.map((prevTodo)=>prevTodo=== id?{ ...prevTodo,completed:!prevTodo.completed}: prevTodo))

}

useEffect(()=>{
//localStorage.getItem("todos")
const todos= JSON.parse(localStorage.getItem("todos"))
 if(todos && todos.length > 0){
  setTodos(todos)
 }
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

//localstorage  is two example set aurget item  jab hum value rakh dete hi to sari value string format ho jati hi
//  aur yeh allow krta hi keyvalue ke ander value rakhna aur jab hum value rakh dete hi to string format me ho jati hi  . value ko lete aur dete time JSON me convert krna padta hi 
//localStorage khud be save nhi kr pata 


  return (
    <TodoProvider value ={{todos,addTodo,updateTodo,deleteTodo,toggleComplpete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo}/>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
          </TodoProvider>
  )
}

export default App
