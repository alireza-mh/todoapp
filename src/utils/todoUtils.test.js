import todos from '../__fixtures__/todos'
import { removeTodoById, addTodo } from './todoUtils'

test('remove existing todo from todos list successfully', () => {
  const id = 2
  const result = removeTodoById(todos, id)
  expect(result).toEqual([
    { id: 1, text: 'first todos', done: false },
    { id: 3, text: 'third todos', done: false }
  ])
})

test('throw error if try to remove todo by non existing id from todos', () => {
  const id = 100
  expect(() => removeTodoById(todos, id)).toThrow(
    `todo by id "${id}" does not exists!`
  )
})

test('throw error if id is null or undefined', () => {
  const id = null
  expect(() => removeTodoById(todos, id)).toThrow(
    'given id is null or undefined'
  )
})

test('add todo successfully', () => {
  const newTodos = addTodo(todos, 'todo text')
  expect(newTodos.length).toBe(todos.length + 1)
  expect(newTodos[newTodos.length - 1]).toMatchObject({
    text: 'todo text',
    done: false
  })
})

test('throw error if todos is not array', () => {
  expect(() => {
    addTodo(null, 'some text')
  }).toThrow('todos should be an array')
})
