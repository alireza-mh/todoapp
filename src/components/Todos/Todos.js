// @flow
import React, { useState, useEffect, useRef } from 'react'
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
import {
  fetchFilter,
  fetchTodos,
  saveFilter,
  saveTodos
} from '../../api/localStorage'


function Todos() {

  const todos = useRef(fetchTodos())
  const initialFilter = useRef(fetchFilter())

  const [activeFilter, setActiveFilter] = useState(null)
  const [visibleTodos, setVisibleTodos] = useState([])

  const didMount  = useRef(false);

  const setTodos = filter => {
    saveTodos(todos.current)
    if (filter === 'Active') {
      setVisibleTodos(getActiveTodos(todos.current))
    } else if (filter === 'Completed') {
      setVisibleTodos(getDoneTodos(todos.current))
    } else {
      setVisibleTodos(todos.current)
    }
  }

  useEffect(() => {
    setTodos(initialFilter.current)
    setActiveFilter(initialFilter.current)
    didMount.current = true;
  }, [])

  // event handling
  const handleEnterText = text => {
    todos.current = addTodo(todos.current, text)
    setTodos(activeFilter)
  }
  const handleItemRemove = id => {
    todos.current = removeTodoById(todos.current, id)
    setTodos(activeFilter)
  }
  const handleChangeItemText = (id, text) => {
    todos.current = changeTodoTextById(todos.current, id, text)
    setTodos(activeFilter)
  }
  const handleChangeItemStatus = (id, status) => {
    todos.current = changeTodoStatusById(todos.current, id, status)
    setTodos(activeFilter)
  }
  const handleFilterClick = filter => {
    setActiveFilter(filter)
    setTodos(filter)
    saveFilter(filter)
  }
  const handleClearCompletes = () => {
    todos.current = getActiveTodos(todos.current)
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
        doneTodoCount={didMount.current && getActiveTodos(todos.current).length}
        onFilterClick={handleFilterClick}
        onClearCompletesClick={handleClearCompletes}
      />
    </div>
  )
}

export default Todos
