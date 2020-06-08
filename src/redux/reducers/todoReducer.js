import { v4 as uuid } from 'uuid'

const todos = (state = [], action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: uuid(),
          text: action.todo,
          isComplete: false
        }
      ]
    case "TOGGLE_TODO":
      return state.map(todo => todo.id === action.todoId ? {...todo, isComplete: !todo.isComplete} : todo)
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.todoId)
    default: return state
  }
}

export default todos