import React, { Component } from 'react';
import { Heading1, HeadingTwo } from './heading'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: ""
    }
  }
  changeStsate() {
    this.setState({ data: this.refs.inputValue.value })
  }
  render() {
    return (
      <div className="App">
        <div className="alert alert-warning">
          <h1 className="App-title">Welcome to React</h1>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>

        <div className="alert alert-success">
          <input type="text" ref="inputValue" />
          <button onClick={this.changeStsate.bind(this)}>Send  </button>
        </div>

        <div className="alert alert-primary">
          <Heading1 myName={this.state.data} />
        </div>
        <div className="alert alert-secondary">
          <HeadingTwo />
        </div>
      </div>
    );
  }
}

export default App;
