import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      val: 0
    }
  }
  componentWillMount() {
    this.setState({ abc: 2 })
  }

  componentDidMount() { }

  componentWillUpdate(newProps, newState) {
    console.log(`New state.val ${newState.val}`)
    console.log(`New state.abc ${newState.abc}`)
  }

  componentDidUpdate(oldProps, oldState) {
    console.log(`Old state.val ${oldState.val}`)
    console.log(`Old state.abc ${oldState.abc}`)
  }

  shouldComponentUpdate() {
    return this.state.val % 5 === 0
  }

  update() {
    this.setState({ val: this.state.val + 1 })
    setTimeout(() => {
      this.setState({ abc: this.state.abc + 2 })
    }, 2000);
  }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1 className="App-title">{this.state.val * this.state.abc}</h1>
        {/* <h1 className="App-title">{this.state.val}</h1> */}

        <button onClick={this.update.bind(this)}>    Submit    </button>
      </div>
    );
  }
}
App.defaultProps = { num: 0 }

export default App;
