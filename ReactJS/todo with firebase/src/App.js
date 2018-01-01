import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      flag: true,
      todoVal: '',
      todoID: ''
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
   // a = a.slice(0, ind).concat(a.slice(ind + 1))
    a.splice(ind,1)
    this.setState({ todos: a });
  }
  editTodo(ky, val) {
    this.setState({ todoVal: val, todoID: ky, flag: false });
  }
  update() {
    // console.log(this.refs.todoUpdate.value)
    firebase.database().ref('/').child(`todos/${this.state.todoID}`).update({ todo: this.refs.todoUpdate.value }).then(() => {
      this.setState({ flag: true })
    })
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

        {(this.state.flag) ?
          <ul>
            {this.state.todos.map((val, ind) => {
              return <li key={ind}>

                {val.todo} {ind}
                <button onClick={this.removeTodo.bind(this, val.id, ind)}>remove </button>
                <button onClick={this.editTodo.bind(this, val.id, val.todo)}>Edit </button>
              </li>
            })}
          </ul>
          :
          <div>
            <input type="text" ref="todoUpdate" defaultValue={this.state.todoVal} />
            <button onClick={this.update.bind(this)}>Update Todo</button>
            <button onClick={() => { this.setState({ flag: true }) }}>Cancel</button>
          </div>
        }

        <div>
          {/* <input type="text" ref="todoUpdate" /> */}
          {/* <button onClick={this.updateTodo.bind(this)}>Update Todo</button> */}

        </div>
      </div>
    );
  }
}

export default App;
