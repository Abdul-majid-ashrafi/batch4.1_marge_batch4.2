import React, { Component } from 'react';
import { connect } from 'react-redux'
import { LoginComponent } from '../components/login'
import { login } from "../actions/authAction"

class App extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <LoginComponent isState={this.state} _inputHandler={this.inputHandler.bind(this)} _submit={this.submit.bind(this)} authResponse={this.props.authReducer} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        authReducer: state.UserReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        myLogin: (credentials) => { // send email and password as a param
            dispatch(login(credentials)) // send email and password  as a param
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);