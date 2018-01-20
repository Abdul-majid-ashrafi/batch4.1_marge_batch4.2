import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';


export class LoginComponent extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }
    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onLogin(e) {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((r) => {
                let db = firebase.database().ref('/').child(`users/${r.uid}`)
                db.once("value", (user) => {
                    console.log("Account Create Suuccessfully", user.val())
                })
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onLogin.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" onChange={this.onChangeHandler.bind(this)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" onChange={this.onChangeHandler.bind(this)} id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="form-check">
                    <Link to="/auth">Create Account</Link>
                </div>
            </div>
        );
    }
}

