import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import {  Orders } from './components/Orders';
import {  Movies } from './components/Movies';
import  Login  from './components/Login';
import './custom.css'
import AuthService from './services/AuthService';
import { Player } from './components/Player';
import Signup from './components/Signup';

export default class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);
    this.state = {
       currentUser: undefined,
       sessionExpired:true
    };
  }

  async componentDidMount() {
    const user = AuthService.getCurrentUser();
    const sessionExpired = await AuthService.isSessionExpired();

    if (user) {
      this.setState({
        currentUser: user,  
        sessionExpired:sessionExpired      
      });
    }
  }

  render () {
    //if(this.state.currentUser === undefined) return (<><Login></Login></>) ;
    if(this.state.sessionExpired) return (<><Login></Login></>) ;

    return (

      <Layout>
         <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movies' component={Movies} />
        <Route path='/fetch-orders' component={Orders} />
        <Route path='/login' component={Login} />
        <Route path='/player' component={Player} />
        <Route path='/signup' component={Signup} />
        </Switch>
      </Layout>
    );
  }
}
