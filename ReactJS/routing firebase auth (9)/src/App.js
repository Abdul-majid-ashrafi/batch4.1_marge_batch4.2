import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { HomeComponent } from './components/home'
import { ContactComponent } from './components/contact'
import { GallaryComponent } from './components/gallary'
import { SignupComponent } from './components/signup'
import { LoginComponent } from './components/login'


const BasicRouting = () => {
  return (
    <Router>
      <div>
        <HomeComponent />
        <Route exact path="/" component={ContactComponent} />
        <Route path="/auth" component={SignupComponent} />
        <Route path="/auth_login" component={LoginComponent} />
        <Route path="/contact" component={ContactComponent} />
        <Route path="/gallary" component={GallaryComponent} />
      </div>
    </Router>
  )
}

export default BasicRouting;
