import React, { Component } from "react";
import { Button, Form, FormGroup,  Input,UncontrolledAlert  } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router";
import Spinner from "./Spinner";

import AuthService from "../services/AuthService";
import {Card} from "reactstrap";
class Signup extends Component {
  constructor(props) {
    super(props);
      this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      loading: false,
      error:false,
      //loginErrorMessage:'Invalid Username or Password',
      message:''

    };
  }

   handleLogin = async(e) => {
    // e.preventDefault();
    // this.setState({
    //   loading: true,
    // });
    // //await AuthService.createUser(this.state.username,this.state.password);
    // var loginStatus = await AuthService.login(this.state.username,this.state.password);
    // if(loginStatus.success)
    // {
    //   this.props.history.push("/");
    //   window.location.reload();
    //   return;
    // }
    // this.setState({
    //   loading: false,
    //   error:true,
    //   message:loginStatus.error
    // });
  }

  onChangeUsername=(e)=>{
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword=(e)=>{
    this.setState({
      password: e.target.value,
    });
  }
  onChangeConfirmPassword=(e)=>{
    this.setState({
      confirmPassword: e.target.value,
    });
  }

 
  render() {
    if (this.state.loading) return (<Spinner loading={this.state.loading}/>);

    return (
      <>
        <Container>
          
              <Card style={{border:'none'}}>
              <img alt="logo" src="logo.png" style={{width:'50%',alignSelf:'center',paddingBottom:'2%'}}></img>
                <Form onSubmit={this.handleLogin}>
                 
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="username"
                      placeholder="Username"
                      aria-label="username or email"
                      className="un"
                      onChange={this.onChangeUsername}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      id="pwd"
                      placeholder="Password"
                      aria-label="password"
                      className="un"
                      onChange={this.onChangePassword}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      id="pwd-cnfrm"
                      placeholder="confirm password"
                      aria-label="confirm password"
                      className="un"
                      onChange={this.onChangeConfirmPassword}
                    />
                  </FormGroup>
                  <Button
                    id="loginBtn"
                    aria-label="Login Button"
                    className="styledButton"
                  >
                    Sign up
                  </Button>

                </Form>
              </Card>
         
        </Container>
      </>
    );
  }
}
export default Signup;
