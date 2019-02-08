// @flow
import React, { useState } from 'react'
import TodoList from '../TodoList'
import './Todos.css'

type Props = {}

function Todos(props: Props) {
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState('')

  const handleTextChange = e => {
    setInputText(e.target.value)
  }

  const handleKeyDown = e => {
    const text = inputText.trim()
    if (e.keyCode === 13 && text) {
      setTodos([...todos, { id: todos.length + 1, text, done: false }])
      setInputText('')
    }
  }

  return (
    <div className='todos'>
      <input
        type='text'
        placeholder='enter new todo...'
        value={inputText}
        onKeyDown={handleKeyDown}
        onChange={handleTextChange}
        className='todo-input'
      />
      <TodoList todos={todos} />
    </div>
  )
}

export default Todos
