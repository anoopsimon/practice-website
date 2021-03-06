import React, { Component } from "react";
import {  Form, FormGroup,  UncontrolledAlert } from "reactstrap";
import { Container } from "reactstrap";
import { withRouter } from "react-router";
import Spinner from "./lib/Spinner";

import AuthService from "../services/AuthService";
import { Card } from "reactstrap";
import StyledButton from "./lib/StyledButton";
import TextBox from "./lib/TextBox";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      loading: false,
      isPasswordValid: true,
      //loginErrorMessage:'Invalid Username or Password',
      message: "",
    };
  }

  renderLoginErrors = (isPasswordValid) => {
    const view = !isPasswordValid ? (
      <UncontrolledAlert
        fade={true}
        style={{
          marginLeft: "20%",
          marginTop: "15%",
          textAlign: "center",
          display: "inline",
          backgroundColor: "rgba(220, 53, 69, 0.9)",
          color: "white",
          borderRadius: "8px",
        }}
      >
        {this.state.message}
      </UncontrolledAlert>
    ) : (
      ""
    );

    return (
      <div>
        <p>{view}</p>
      </div>
    );
  };

  isPasswordValid = ()=>
  {
    let isPwdValid = true;
    var message;
    if (this.state.password !== this.state.confirmPassword) 
    {
      isPwdValid = false;
      message='Password mismatch';
    }
    else if(this.state.password.length < 6)
    {
      isPwdValid = false;
      message ='Password must be minium 5 characters';
    }
    
    this.setState({
      message: message,
      isPasswordValid: isPwdValid,
    });

    return isPwdValid;
  }

  handleRegistration = async (e) => {
    e.preventDefault();

    if(!this.isPasswordValid()) return;

    this.setState({
      loading: true,
    });
    var registrationStatus = await AuthService.createUser(
      this.state.username,
      this.state.password
    );
    var loginStatus = await AuthService.login(
      this.state.username,
      this.state.password
    );
    if (registrationStatus.success && loginStatus.success) {
      this.props.history.push("/");
      window.location.reload();
      return;
    }
    this.setState({
      loading: false,
      error: true,
      message: registrationStatus.error,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    if (this.state.loading) return <Spinner message="Please wait. Your account is being created" loading={this.state.loading} />;

    return (
      <>
        <Container>
          <Card style={{ border: "none" }}>
            <img
              alt="logo"
              src="logo.png"
              style={{ width: "50%", alignSelf: "center", paddingBottom: "2%" }}
            ></img>
            <Form onSubmit={this.handleRegistration}>
              <FormGroup>
                <TextBox
                  type="email"
                  name="username"
                  id="username"
                  placeholder="Username"
                  aria-label="username or email"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <TextBox
                  type="password"
                  name="password"
                  id="pwd"
                  placeholder="Password"
                  aria-label="password"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <TextBox
                  type="password"
                  name="confirmPassword"
                  id="pwd-cnfrm"
                  placeholder="confirm password"
                  aria-label="confirm password"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
                <StyledButton
                id="loginBtn"
                ariaLabel="Login Button"
                text="Register"
              >                
              </StyledButton> 
            </Form>
            {this.renderLoginErrors(this.state.isPasswordValid)}
          </Card>
        </Container>
      </>
    );
  }
}
export default withRouter(Signup);
