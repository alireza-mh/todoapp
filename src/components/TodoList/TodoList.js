// @flow
import * as React from 'react'
import TodoItem from '../TodoItem'
import type { TodoItemType } from '../../types/todos'

type Props = {
  todos: Array<TodoItemType>,
  onItemRemove: Function
}

function TodoList(props: Props) {
  const { todos, onItemRemove } = props

  return todos.map<React.Element<typeof TodoItem>>((todo: TodoItemType) => (
    <TodoItem key={todo.id} {...todo} onRemove={onItemRemove} />
  ))
}

TodoList.defaultProps = {
  todos: []
}

export default TodoList
