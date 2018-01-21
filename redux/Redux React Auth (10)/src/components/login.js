import React from 'react';
import { Link } from 'react-router-dom';

export class LoginComponent extends React.Component {
    render() {
        const prop = this.props;
        return (
            <div className="container">
                <h2>LOGIN WITH YOUR CREDENTIALS</h2>
                <hr />
                <form onSubmit={prop._submit}>
                    <div className="row">

                        <div className="form-group col-sm">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" onChange={prop._inputHandler} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group col-sm">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" onChange={prop._inputHandler} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <div className="form-group col-sm">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
                <Link to="/signup">
                    <button type="button" className="btn btn-link btn-lg btn-block">Don't Have an account</button>
                </Link>
                <br />
            </div>
        )
    }
}

