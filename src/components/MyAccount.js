import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import Payment from "./Payment";
import CardImg from "reactstrap/lib/CardImg";

export default class MyAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1",
      tab: false,
    };
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  tabs = () => {
    return (
      <>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              My Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Payment Details
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          <Row>
              <Col sm="6">
                <Card body>
                    <CardImg src="pro_pic.jpg" style={{width:200,height:200}}></CardImg>
                  <CardTitle>Anoop Simon</CardTitle>
                  <CardText>
                    Todo
                  </CardText>
                  <Button>Update</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Update</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Row>
              <Col sm="12">
               <Payment></Payment>
              </Col>
            </Row>
           
          </TabPane>
        </TabContent>
      </>
    );
  };

  render() {
    return (
      <>
        <h1 className="title">
          My Account 
        </h1>
        {this.tabs()}
      </>
    );
  }
}
