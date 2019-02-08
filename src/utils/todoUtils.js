// @flow
import { TodoItemType } from '../types/todos'

type Todos = Array<?TodoItemType>

export function removeTodoById(todos: Todos, id: number): Todos {
  if (id === null || id === undefined) {
    throw new Error('given id is null or undefined')
  }
  const newTodos = todos.filter(todo => todo.id !== id)
  if (todos.length === newTodos.length) {
    throw new Error(`todo by id "${id}" does not exists!`)
  }
  return newTodos
}

export function addTodo(todos: Todos, todo: TodoItemType) {}
