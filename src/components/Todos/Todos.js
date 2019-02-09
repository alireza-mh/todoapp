// @flow
import React, { useState } from 'react'
import TodoList from '../TodoList'
import TodoInput from '../TodoInput'
import TodoFooter from '../TodoFooter'
import './Todos.css'
import {
  removeTodoById,
  addTodo,
  getActiveTodos,
  getDoneTodos,
  changeTodoTextById,
  changeTodoStatusById
} from '../../utils/todoUtils'

let todos = []

function Todos() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [visibleTodos, setVisibleTodos] = useState([])

  const setTodos = filter => {
    if (filter === 'Active') {
      setVisibleTodos(getActiveTodos(todos))
    } else if (filter === 'Completed') {
      setVisibleTodos(getDoneTodos(todos))
    } else {
      setVisibleTodos(todos)
    }
  }

  // event handling
  const handleEnterText = text => {
    todos = addTodo(todos, text)
    setTodos(activeFilter)
  }
  const handleItemRemove = id => {
    todos = removeTodoById(todos, id)
    setTodos(activeFilter)
  }
  const handleChangeItemText = (id, text) => {
    todos = changeTodoTextById(todos, id, text)
    setTodos(activeFilter)
  }
  const handleChangeItemStatus = (id, status) => {
    todos = changeTodoStatusById(todos, id, status)
    setTodos(activeFilter)
  }
  const handleFilterClick = filter => {
    setActiveFilter(filter)
    setTodos(filter)
  }
  const handleClearCompletes = () => {
    todos = getActiveTodos(todos)
    setTodos()
  }

  return (
    <div className='todos'>
      <TodoInput onEnterText={handleEnterText} />
      <TodoList
        todos={visibleTodos}
        onItemRemove={handleItemRemove}
        onChangeItemText={handleChangeItemText}
        onChangeItemStatus={handleChangeItemStatus}
      />
      <TodoFooter
        activeFilter={activeFilter}
        doneTodoCount={getActiveTodos(todos).length}
        onFilterClick={handleFilterClick}
        onClearCompletesClick={handleClearCompletes}
      />
    </div>
  )
}

export default Todos
