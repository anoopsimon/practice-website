import React, { Component } from "react";
import { Button, Form, FormGroup,  Input} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router";
import Spinner from "./Spinner";

import AuthService from "../services/AuthService";
import {Card} from "reactstrap";
class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  handleLogin(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true,
    });
    AuthService.loginAs();
    this.props.history.push("/");
    window.location.reload();
  }

  render() {
    if (this.state.loading)
      return (
        <Spinner loading={this.state.loading}/>
             );

    return (
      <>
        <Container>
          <Row style={{ marginTop: "20%" }}>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Card className="loginForm">
              <img alt="logo" src="logo.png"></img>
              <p className="sign" align="center">Sign in</p>
                <Form onSubmit={this.handleLogin}>
                 
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="username"
                      placeholder="Username"
                      aria-label="username or email"
                      className="un"
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
                    />
                  </FormGroup>
                  <Button
                    id="loginBtn"
                    aria-label="Login Button"
                    className="styledButton"
                  >
                    Submit
                  </Button>
                </Form>
                <p className="forgot" align="center"><a aria-label="forgot password" href="/">Forgot Password?</a></p>

              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default withRouter(Login);
