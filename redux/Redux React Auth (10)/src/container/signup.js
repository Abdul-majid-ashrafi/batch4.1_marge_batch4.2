import React, { Component } from 'react';
import { connect } from 'react-redux'
import { SignupComponent } from '../components/signup'
import { register, registerOnFirebase, registerFai, registerFail } from "../actions/authAction"
import * as firebase from 'firebase';

class SignupContainer extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            email: '',
            password: '',
            mobile: '',
            address: ''
        }
    }

    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
        this.props.isRegister()
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
                delete this.state.password
                firebase.database().ref('/').child(`users/${res.uid}`).set(this.state)
                this.props.isRegisterOnFB()
                this.props.history.push("/")
            }).catch((error) => {
                this.props.isRegisterFail(error)
            })
    }
    render() {
        console.log(this.props.authReducer)
        return (
            <div>
                <SignupComponent
                    isState={this.state}
                    _inputHandler={this.inputHandler.bind(this)}
                    _submit={this.submit.bind(this)}
                    authReducer={this.props.authReducer}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authReducer: state.authReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isRegister: () => {
            dispatch(register())
        },
        isRegisterOnFB: () => {
            dispatch(registerOnFirebase())
        },
        isRegisterFail: (msg) => {
            dispatch(registerFail(msg))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);