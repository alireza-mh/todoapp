// @flow
import React, { useState } from 'react'
import TodoList from '../TodoList'
import TodoInput from '../TodoInput'
import './Todos.css'

type Props = {}

function Todos(props: Props) {
  const [todos, setTodos] = useState([])

  const handleEnterText = text => {
    setTodos([...todos, { id: todos.length + 1, text, done: false }])
  }

  return (
    <div className='todos'>
      <TodoInput onEnterText={handleEnterText} />
      <TodoList todos={todos} />
    </div>
  )
}

export default Todos
