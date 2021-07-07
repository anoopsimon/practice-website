import React, { Component } from "react";
import { Button, Form, FormGroup,  Input,UncontrolledAlert  } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router";
import Spinner from "./Spinner";

import AuthService from "../services/AuthService";
import {Card} from "reactstrap";
class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
      username: "",
      password: "",
      loading: false,
      error:false,
      loginErrorMessage:'Invalid Username or Password'

    };
  }

   handleLogin = async(e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    //await AuthService.createUser(this.state.username,this.state.password);
    var loginStatus = await AuthService.login(this.state.username,this.state.password);
    if(loginStatus)
    {
      this.props.history.push("/");
      window.location.reload();
      return;
    }
    this.setState({
      loading: false,
      error:true
    });
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

  render() {
    if (this.state.loading) return (<Spinner loading={this.state.loading}/>);

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
                  <Button
                    id="loginBtn"
                    aria-label="Login Button"
                    className="styledButton"
                  >
                    Submit
                  </Button>

                </Form>
                <p className="forgot" align="center"><a aria-label="forgot password" href="/">Forgot Password?</a></p>
                {this.state.error? <UncontrolledAlert  fade={true} style={{marginTop:'5%',textAlign:'center',display:'inline',backgroundColor:'rgba(220, 53, 69, 0.9)',color:'white',borderRadius:'8px'}}>{this.state.loginErrorMessage}</UncontrolledAlert >:''}

              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default withRouter(Login);
