import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

export class SignupComponent extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            userName: "",
            email: "",
            password: ""
        }
        console.log(prop.history)
    }
    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((r) => {
                let db = firebase.database().ref('/').child(`users/${r.uid}`)
                db.set(this.state).then((result) => {
                    console.log("Account Create Suuccessfully")
                    this.props.history.push("/auth_login")
                })
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
        // console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" name="userName" onChange={this.onChangeHandler.bind(this)} className="form-control" placeholder="User Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" onChange={this.onChangeHandler.bind(this)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" onChange={this.onChangeHandler.bind(this)} id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <Link to="/auth_login">Already have Account</Link>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

