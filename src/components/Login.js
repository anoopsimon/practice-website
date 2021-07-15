import React, { Component } from "react";
import { Button, Form, FormGroup, Input, UncontrolledAlert } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router";
import Spinner from "./Spinner";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import AuthService from "../services/AuthService";
import { Card } from "reactstrap";
import Signup from "./Signup";
import StyledButton from "./lib/StyledButton";
import TextBox from "./lib/TextBox";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
      error: false,
      //loginErrorMessage:'Invalid Username or Password',
      message: "",
      open: false,
      modal: false,
    };
  }

  handleLogin = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    var loginStatus = await AuthService.login(
      this.state.username,
      this.state.password
    );
    if (loginStatus.success) {
      this.props.history.push("/");
      window.location.reload();
      return;
    }
    this.setState({
      loading: false,
      error: true,
      message: loginStatus.error,
    });
  };

 
  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  renderSignup = () => {
    return (
      <div>
        <Modal isOpen={this.state.open} toggle={this.toggle}>
          <ModalHeader
            style={{ paddingLeft: "35%" }}
            isOpen={this.state.open}
            toggle={this.toggle}
          >
            Join Movie Rental
          </ModalHeader>
          <ModalBody>
            <Signup />
          </ModalBody>
        </Modal>
      </div>
    );
  };

  renderLoginErrors = (error) => {
    const view = error ? (
      <UncontrolledAlert
        fade={true}
        style={{
          marginLeft: "20%",
          marginTop: "5%",
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

  register = (e) => {
    e.preventDefault();
    this.setState({
      open: true,
    });
  };

  render() {
    if (this.state.loading) return <Spinner loading={this.state.loading} />;

    return (
      <>
        <Container>
          <Row style={{ marginTop: "10%" }}>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Card className="loginForm">
                <img alt="logo" src="logo.png"></img>
                <p className="sign" align="center">
                  Sign in
                </p>
                <Form onSubmit={this.handleLogin}>
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
                  <StyledButton
                    id="loginBtn"
                    aria-label="Login Button"
                    text="Sign In"
                  >
                    
                  </StyledButton>
                </Form>
                <p className="forgot" align="center">
                  <a aria-label="forgot password" href="/">
                    Forgot Password?
                  </a>
                </p>
                <hr></hr>
                <p style={{ paddingLeft: "20%" }}>
                  New to Movie Rental ?{" "}
                  <a align="center" href="/" onClick={this.register}>
                    Register{" "}
                  </a>
                </p>
                {this.renderLoginErrors(this.state.error)}
                {this.renderSignup()}
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default withRouter(Login);
