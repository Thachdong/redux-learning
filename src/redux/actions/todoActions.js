import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actionsType'

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
})

export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  todoId
})

export const deleteTodo = todoId => ({
  type: DELETE_TODO,
  todoId
})