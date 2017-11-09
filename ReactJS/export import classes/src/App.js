import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


export class HomeComponent extends Component {
  constructor(prop){
    super(prop)
    // console.log(prop)
    console.log(this.props)
    
  }
  render() {
    return <h1>{this.props.data} Compoent </h1>
  }
}
export class AboutComponent extends Component {
  render() {
    return <h1>About Compoent Render Here </h1>
  }
}


class Apps extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Apps;
