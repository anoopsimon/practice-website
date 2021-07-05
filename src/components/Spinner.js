/**
 * @author Anoop Simon
 * @create date 2021-07-05 11:33:57
 * @modify date 2021-07-05 11:33:57
 * @desc A re -usable loader component
 */
import React, { Component } from "react";
import FadeLoader from "react-spinners/FadeLoader";

export default class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
        color:'#8C55AA',
        size:200
    };
  }

  render() {
    return (
      <>
        <div className="loader">
          <FadeLoader
            color={this.state.color}
            loading={this.props.loading}
            size={this.state.size}
          ></FadeLoader>
        </div>
      </>
    );
  }
}
