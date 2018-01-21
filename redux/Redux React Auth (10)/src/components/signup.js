import React from 'react';
import { Link } from 'react-router-dom';

export class SignupComponent extends React.Component {
    render() {
        const prop = this.props;
        return (
            <div className="container">
                <h2>SIGN UP</h2>
                <hr />
                <form onSubmit={prop._submit}>
                    <div className="row">

                        <div className="form-group col-sm">
                            <label>User Name</label>
                            <input type="text"
                                name="userName"
                                className="form-control"
                                placeholder="Enter User Name"
                                onChange={prop._inputHandler} />
                        </div>

                        <div className="form-group col-sm">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" onChange={prop._inputHandler} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group col-sm">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" onChange={prop._inputHandler} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-sm">
                            <label htmlFor="cellnumber">Cell Number</label>
                            <input type="text" onChange={prop._inputHandler} name="mobile" className="form-control" id="cellnumber" placeholder="92 308 _ _ _ _ _" />
                        </div>

                        <div className="form-group col-sm">
                            <label htmlFor="address">Address</label>
                            <input type="text" onChange={prop._inputHandler} name="address" className="form-control" id="address" placeholder="Enter your address" />
                        </div>

                        <div className="form-group col-sm">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
                <Link to="/">
                    <button type="button" className="btn btn-link btn-lg btn-block">Have an already account</button>
                </Link>

                {(prop.authReducer.isError) ?
                    <div className="alert alert-danger" role="alert">
                        {prop.authReducer.errorMessage}
                    </div>
                    : ""
                }

            </div>
        )
    }
}

