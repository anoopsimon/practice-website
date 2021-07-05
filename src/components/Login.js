import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router";
import AuthenticationService from "../services/AuthenticationService";

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
    console.log("Invoke login");
    this.setState({
      message: "",
      loading: true,
    });
    AuthenticationService.loginAs();
    this.props.history.push("/");
    window.location.reload();
  }

  render() {
    return (
      <>
        <Container>
          <Row style={{ marginTop: "20%" }}>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Form onSubmit={this.handleLogin}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password placeholder"
                  />
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default withRouter(Login);
