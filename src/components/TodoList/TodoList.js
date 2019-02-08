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
  todos: [
    { id: 1, text: 'hello man', done: false },
    { id: 2, text: 'hello kid', done: true }
  ]
}

export default TodoList
