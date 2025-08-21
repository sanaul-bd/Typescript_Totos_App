
import React, { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import type { TodoType } from './types'

// dammi data 
const todosData = [
  {
    id: "1",
    title: "Todo Title 1"
  },
  {
    id: "2",
    title: "Todo Title 2"
  },
  {
    id: "3",
    title: "Todo Title 3"
  },
  {
    id: "4",
    title: "Todo Title 4"
  },
]

// console.log(todosData);



const App = () => {
  const [todos, setTodos] = useState(todosData)
  // console.log(todos);
  const handleDleeteTodo = (id: string ) => {
    console.log(id);
    const filterdData = todos.filter(todo => todo.id !== id);
    setTodos(filterdData)
  }

  const handleAddNewTodo = (newTodo: { id: string ; title: string }) => {
    console.log(newTodo);
    setTodos((prevstate) => [...prevstate, newTodo]);
  }


  return (
    <div>
      <AddTodo handleAddNewTodo={handleAddNewTodo} />
      <Todos
        todos={todos}
        handleDleeteTodo={handleDleeteTodo}
      ></Todos>
    </div>
  )
}

export default App