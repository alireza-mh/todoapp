// @flow
import React, { useState } from 'react'
import TodoList from '../TodoList'
import TodoInput from '../TodoInput'
import TodoFooter from '../TodoFooter'
import './Todos.css'
import { removeTodoById, addTodo } from '../../utils/todoUtils'

function Todos() {
  const [todos, setTodos] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')

  const handleEnterText = text => {
    setTodos(addTodo(todos, text))
  }

  const handleItemRemove = id => {
    setTodos(removeTodoById(todos, id))
  }

  const handleFilterClick = filter => {
    setActiveFilter(filter)
  }

  return (
    <div className='todos'>
      <TodoInput onEnterText={handleEnterText} />
      <TodoList todos={todos} onItemRemove={handleItemRemove} />
      <TodoFooter
        activeFilter={activeFilter}
        doneTodoCount={0}
        onFilterClick={handleFilterClick}
      />
    </div>
  )
}

export default Todos
