import React, { Component } from "react";
import Cards from "react-credit-cards";
import { Container, Row, Col } from "reactstrap";
import TextBox from "./lib/TextBox";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",
      anoopsimon:''
    };
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name + '>' + value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Container>
          <Row>
            <Col>
              <Cards
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focused={this.state.focus}
                name={this.state.name}
                number={this.state.number}
              />
            </Col>

            <form>
              <input
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                className="textbox"
                maxLength={16}
              />
              <input
                type="tel"
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                className="textbox"
              />
              <Row>
                <Col sm={{ size: "auto", offset: 0 }}>
                  <input
                    type="tel"
                    name="expiry"
                    placeholder="Valid Thru"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    className="textbox"
                    maxLength={5}
                  />
                </Col>
                <Col sm={{ size: "auto", offset: 0 }}>                  
                  <TextBox
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    className="textbox"
                    maxLength={3}
                  />
                </Col>
              </Row>
            </form>
          </Row>
          <TextBox placeholder='custom' name='anoopsimon' onChange={this.handleInputChange}></TextBox>

        </Container>
      </div>
    );
  }
}
