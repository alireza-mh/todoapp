// @flow
import * as React from 'react'
import TodoItem from '../TodoItem'
import type { TodoItemType } from '../../types/todos'

type Props = {
  todos: Array<TodoItemType>,
  onItemRemove: Function,
  onChangeItemText: Function,
  onChangeItemStatus: Function
}

function TodoList(props: Props) {
  const { todos, onItemRemove, onChangeItemText, onChangeItemStatus } = props

  return todos.map<React.Element<typeof TodoItem>>((todo: TodoItemType) => (
    <TodoItem
      key={todo.id}
      {...todo}
      onRemove={onItemRemove}
      onChangeText={onChangeItemText}
      onChangeStatus={onChangeItemStatus}
    />
  ))
}

TodoList.defaultProps = {
  todos: []
}

export default TodoList
