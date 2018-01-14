import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux'

class App extends Component {
  changeUserName() {
    this.props.setName('Majid Ashraf')
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1> {this.props.userData.name}</h1>
        <button onClick={this.changeUserName.bind(this)}>Click Me</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    userData : state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        value: name
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);