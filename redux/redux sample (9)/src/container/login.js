import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { LoginComponent } from '../components/login'
import { login } from "../actions/userAction"

class App extends Component {
    login() {
        this.props.myLogin("Majid Ashraf")
    }
    render() {
        return (
            <div className="App">
                <LoginComponent auth={this.props.authReducer} _login={this.login.bind(this)} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        authReducer: state.UserReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        myLogin: (name) => { // send name as a param
            dispatch(login(name)) // send name as a param
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);