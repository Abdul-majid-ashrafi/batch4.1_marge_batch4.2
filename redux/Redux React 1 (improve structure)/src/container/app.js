import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { AppComponent } from '../components/appComponent'
import { setName } from "../actions/userAction"

class App extends Component {

    changeUserName() {
        this.props.setNewName('Majid Ashraf') // send name
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <AppComponent userName={this.props.UserReducer.name} />

                <button onClick={this.changeUserName.bind(this)}>Change </button>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        UserReducer: state.UserReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNewName: (name) => { // send name as a param
            dispatch(setName(name)) // send name as a param
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);