import React, { Component } from 'react';
//import { Route } from 'react-router';
import { Switch, Route, Link } from "react-router-dom";

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import {  Orders } from './components/Orders';
import {  Movies } from './components/Movies';
import  Login  from './components/Login';

import './custom.css'
import AuthenticationService from './services/AuthenticationService';

export default class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);
    this.state = {
       currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,        
      });
    }
  }

  render () {
    if(this.state.currentUser===undefined) return (<><Login></Login></>) ;

    return (

      <Layout>
         <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movies' component={Movies} />
        <Route path='/fetch-orders' component={Orders} />
        <Route path='/login' component={Login} />
        </Switch>
      </Layout>
    );
  }
}
