import React, { Component } from "react";
//import QierPlayer from 'qier-player';
import { UncontrolledAlert } from 'reactstrap';
import Payment from "./Payment";

export class Player extends Component {
  static displayName = Player.name;

  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
      title: "Watch Movies / TV Shows",
      result: null,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.render = this.render.bind(this);
  }

  async componentDidMount() {
   // this.setState({ movies: data, loading: false });
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
  }

  handleOnSearch = (selectedResult) => {
    console.log(selectedResult);
    this.setState({
      result: selectedResult,
    });
  };

  result() {
    return (
     <></>
    );
  }

  render() {
    return (
      <>
        <h1 className="title">{this.state.title}</h1>
        <UncontrolledAlert color="info" fade={false}>
        This feature is currently work in progress ..
      </UncontrolledAlert>

        <div style={{marginLeft:'auto',marginRight:'auto'}}>
        {/* <QierPlayer style= {{margin:'auto'}} srcOrigin="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" /> */}

        <Payment></Payment>
        </div>
      </>
    );
  }
}
