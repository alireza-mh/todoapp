// @flow
import type { TodoItemType } from '../types/todos'

type Todos = Array<TodoItemType>

export function saveTodos(todos: Todos) {
  const data = JSON.stringify(todos)
  localStorage.setItem('todos', data)
}

export function fetchTodos(): Todos {
  const data = localStorage.getItem('todos') || '[]'
  return JSON.parse(data)
}

export function saveFilter(filter: string) {
  localStorage.setItem('filter', filter)
}

export function fetchFilter(): string {
  return localStorage.getItem('filter') || 'All'
}
