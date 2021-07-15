import React, { Component } from "react";

export default class HyperLink extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <a href={this.props?.href} onClick={this.props?.onClick} ariaLabel={this.props.ariaLabel}>
          {this.props?.linkText}
        </a>
      </>
    );
  }
}
