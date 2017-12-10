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


  /*componentWillMount()
  Executed before the node is inserted into the DOM.
  NOTE:
  Not allow : nextProps , nextState 
  Allow : this.setState  
  */
  componentWillMount() {
    this.setState({ abc: 2 })
  }

  /*
  componentDidMount()
  Executed after the node is inserted into the DOM.
  NOTE:
  Not allow : nextProps , nextState ,this.setState  
  */
  componentDidMount() { }

  /*
  componentWillUpdate(nextProps, nextState)
  Executed before the render() method of your component is called again (as a
  result to changes to the properties or state).
  */
  componentWillUpdate(newProps, newState) {
    console.log(`New state.val ${newState.val}`)
    console.log(`New state.abc ${newState.abc}`)
  }


  /*
  componentDidUpdate(prevProps, prevState)
  Executed after the render() method is done and the new changes to the underlying
  DOM have been applied.
  */
  componentDidUpdate(oldProps, oldState) {
    console.log(`Old state.val ${oldState.val}`)
    console.log(`Old state.abc ${oldState.abc}`)
  }

  /*
    shouldComponentUpdate(newProps, newState)
    This method is called before componentWillUpdate() and gives you a chance to
    return false; and cancel the update, which means your render() method
    won’t be invoked.*/
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
