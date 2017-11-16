import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }

    firebase.database().ref('/').child("todos").on('child_added', (snap) => {
      var obj = snap.val();
      obj.id = snap.key;
      this.state.todos.push(obj)
      this.setState({ todos: this.state.todos });
    })
  }
  addTodo() {
    let todo = { todo: this.refs.todo.value }
    firebase.database().ref('/').child("todos").push(todo)
  }

  removeTodo(ky, ind) {
    firebase.database().ref('/').child(`todos/${ky}`).remove();
    var a = this.state.todos
    a = a.slice(0, ind).concat(a.slice(ind + 1))
    this.setState({ todos: a });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Todo</h1>
          <input type="text" ref="todo" />
          <button onClick={this.addTodo.bind(this)}>Add Todo</button>
        </header>
        <ul>
          {this.state.todos.map((val, ind) => {
            return <li key={ind}> {val.todo}
              <button onClick={this.removeTodo.bind(this, val.id, ind)}>remove </button>
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
