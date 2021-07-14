import React, { Component } from "react";
import Cards from "react-credit-cards";
import { Container, Row, Col } from "reactstrap";
export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",
    };
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

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
                className="un"
                maxLength={16}
              />
              <input
                type="tel"
                name="name"
                placeholder="Name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                className="un"
              />
              <Row>
                <Col sm={{ size: "auto", offset: 0 }}>
                  <input
                    type="tel"
                    name="expiry"
                    placeholder="Valid Thru"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    className="un"
                    maxLength={5}
                  />
                </Col>
                <Col sm={{ size: "auto", offset: 0 }}>                  
                  <input
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    className="un"
                    maxLength={3}
                  />
                </Col>
              </Row>
            </form>
          </Row>
        </Container>
      </div>
    );
  }
}
