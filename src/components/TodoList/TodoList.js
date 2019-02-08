// @flow
import React from 'react'
import TodoItem from '../TodoItem'
import { TodoItemType } from '../../types/todos'

type Props = {
  todos: Array<TodoItemType>
}

function TodoList(props: Props) {
  const { todos } = props
  return todos.map(todo => <TodoItem key={todo.id} {...todo} />)
}

TodoList.defaultProps = {
  todos: []
}

export default TodoList
