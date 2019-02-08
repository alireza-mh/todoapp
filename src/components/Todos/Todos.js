// @flow
import React, { useState } from 'react'
import TodoList from '../TodoList'
import TodoInput from '../TodoInput'
import './Todos.css'
import { removeTodoById, addTodo } from '../../utils/todoUtils'

type Props = {}

function Todos(props: Props) {
  const [todos, setTodos] = useState([])

  const handleEnterText = text => {
    setTodos(addTodo(todos, text))
  }

  const handleItemRemove = id => {
    setTodos(removeTodoById(todos, id))
  }

  return (
    <div className='todos'>
      <TodoInput onEnterText={handleEnterText} />
      <TodoList todos={todos} onItemRemove={handleItemRemove} />
    </div>
  )
}

export default Todos
