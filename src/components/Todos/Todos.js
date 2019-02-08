// @flow
import React, { useState } from 'react'
import TodoList from '../TodoList'
import TodoInput from '../TodoInput'
import './Todos.css'
import { removeTodoById } from '../../utils/todoUtils'

type Props = {}

function Todos(props: Props) {
  const [todos, setTodos] = useState([])

  const handleEnterText = text => {
    setTodos([...todos, { id: todos.length + 1, text, done: false }])
  }

  const handleItemRemove = id => {
    const newTodos = removeTodoById(todos, id)
    setTodos(newTodos)
  }

  return (
    <div className='todos'>
      <TodoInput onEnterText={handleEnterText} />
      <TodoList todos={todos} onItemRemove={handleItemRemove} />
    </div>
  )
}

export default Todos
