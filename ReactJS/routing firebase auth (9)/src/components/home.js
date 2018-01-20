import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HomeComponent extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand"> Dashboard </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/contact" className="nav-link"> Contact </Link>
              </li>
              <li className="nav-item">
                <Link to="/gallary" className="nav-link"> Gallary </Link>
              </li>
              <li className="nav-item">
                <Link to="/auth" className="nav-link"> Sign up </Link>
              </li>
            </ul>
          </div>
        </nav>


        {/* <h1>Welcome to DASHboard</h1>

        <Link to="/contact"> Contact </Link>
        <Link to="/gallary"> gallary </Link> */}

      </div>
    );
  }
}

