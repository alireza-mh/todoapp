// @flow
import React from 'react'
import TodoItem from '../TodoItem'
import { TodoItemType } from '../../types/todos'

type Props = {
  todos: Array<TodoItemType>,
  onItemRemove: Function
}

function TodoList(props: Props) {
  const { todos, onItemRemove } = props

  return todos.map(todo => (
    <TodoItem key={todo.id} {...todo} onRemove={onItemRemove} />
  ))
}

TodoList.defaultProps = {
  todos: []
}

export default TodoList
