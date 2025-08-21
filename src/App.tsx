
import React, { useState } from 'react'
import Todos from './components/Todos'

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
  {
    id: "5",
    title: "Todo Title 5"
  },
  {
    id: "6",
    title: "Todo Title 6"
  },
  {
    id: "7",
    title: "Todo Title 7"
  },
  {
    id: "8",
    title: "Todo Title 8"
  },
]

// console.log(todosData);



const App = () => {
  const [todos, setTodos] = useState(todosData)
  // console.log(todos);
  return (
    <div>
      <Todos todos={todos} ></Todos>
    </div>
  )
}

export default App