import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'
class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  submit() {
    let val = { todo: this.refs.todo.value }
    firebase.database().ref('/').child("todo").push(val)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="text" ref="todo" />
        <button onClick={this.submit.bind(this)}>  Submit</button>

        <p className="App-intro">
          Hello world
        </p>
      </div>
    );
  }
}

export default App;
