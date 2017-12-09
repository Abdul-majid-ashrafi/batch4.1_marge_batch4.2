import React, { Component } from 'react';
import { App } from '../components/AppCom'

export class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            email: "",
            pass: ""
        }
    }

    eventHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit(e) {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="App">
                <App isState={this.state} _eventHandler={this.eventHandler.bind(this)} _submit={this.submit.bind(this)} />
            </div>
        );
    }
}

