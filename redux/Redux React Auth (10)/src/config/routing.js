import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from '../container/login'
import SignupContainer from '../container/signup'
import HomeContainer from '../container/home'
import { ContactContainer } from '../container/contact'

export default class Routing extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="home">Home</Link> <br />
                    <Link to="/">Login</Link> <br />
                    <Link to="/signup">Aignup</Link> <br />
                    <Link to="contact">Contact</Link>

                    <Route exact path="/" component={App} />
                    <Route path="/signup" component={SignupContainer} />
                    <Route path="/home" component={HomeContainer} />
                    <Route path="/contact" component={ContactContainer} />
                </div>
            </Router>
        )
    }
}