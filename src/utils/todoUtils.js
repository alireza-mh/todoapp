// @flow
import uuidv4 from 'uuid/v4'
import { TodoItemType } from '../types/todos'

type Todos = Array<?TodoItemType>

export function removeTodoById(todos: Todos, id: string): Todos {
  if (id === null || id === undefined) {
    throw new Error('given id is null or undefined')
  }
  const newTodos = todos.filter(todo => todo.id !== id)
  if (todos.length === newTodos.length) {
    throw new Error(`todo by id "${id}" does not exists!`)
  }
  return newTodos
}

export function addTodo(todos: Todos, todoText: string): Todos {
  if (!Array.isArray(todos)) {
    throw new Error('todos should be an array')
  }
  const newTodo = { id: uuidv4(), text: todoText, done: false }
  return todos.concat(newTodo)
}
