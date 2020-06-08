import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './redux/actions/todoActions'
import { setFilter } from './redux/actions/filterActions'
import {fetchDataImplement} from './redux/actions/fetchDataActions'
import { fetchPostImplement } from './redux/actions/fetchPostActions'

const App = ({state, addTodo, toggleTodo, deleteTodo, setFilter, fetchDataImplement, fetchPostImplement}) => {
  useEffect(() => {
    fetchDataImplement();
    fetchPostImplement();
  }, [fetchDataImplement, fetchPostImplement])
  console.log(state);
  
  let todos = [];
  switch(state.filter) {
    case "SHOW_ACTIVE":
      todos = state.todos.filter(todo => todo.isComplete === false)
      break;
    case "SHOW_COMPLETE":
      todos = state.todos.filter(todo => todo.isComplete === true)
      break;
    default: todos = state.todos
  }

  return <div className="app">
    <form className="todo-form" onSubmit={e => {
      e.preventDefault();
      addTodo(e.target.todo.value);
    }}>
      <textarea name="todo" placeholder="Todo text goes here ..."></textarea>
      <br></br>
      <button type="submit">Add</button>
    </form>
    <hr></hr>
    <div className="todo-dashboard">
      <div>
        <span>Filter :</span>&nbsp;
        <select onChange={e => setFilter(e.target.value)}>
          <option>SHOW_ALL</option>
          <option>SHOW_COMPLETE</option>
          <option>SHOW_ACTIVE</option>
        </select>
      </div>
      <table>
        <tbody>
        <tr>
          <th>Todo</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
          {
            todos.map(todo =>
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td onClick={() => toggleTodo(todo.id)}>{todo.isComplete ? "Done" : "Doing"}</td>
              <td onClick={() => deleteTodo(todo.id)}>Remove</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
    <button onClick={fetchDataImplement}>Fetch users</button>&nbsp;
    <button onClick={fetchPostImplement}>Fetch posts</button>
  </div>
}

const mapStateToProps = state => ({state})
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo,
  setFilter,
  fetchDataImplement,
  fetchPostImplement
}

export default connect(mapStateToProps, mapDispatchToProps)(App)