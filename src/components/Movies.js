import { any } from 'prop-types';
import React, { Component } from 'react';
 import FuzzySearch from 'react-fuzzy'

 import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const API_URL = process.env.REACT_APP_MOVIES_SERVICE_URL ;

export class Movies extends Component {
  static displayName = Movies.name;

  constructor(props) {
    super(props);
    this.state = { 
      currentCount: 0 ,
      title:'Search Movies',
      movies:[],
      result:null

         
   };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.render = this.render.bind(this);
  }

  componentDidMount() {
    this.getMovieList();
    //document.getElementById('fuzzyTextbox').removeAttribute("style");

  }

  async getMovieList() {
    const response = await fetch(API_URL+'movies');
    const data = await response.json();
    this.setState({ movies: data, loading: false });
  }
  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

   handleOnSearch = (selectedResult) => {
    console.log(selectedResult);
    this.setState({
      result:selectedResult
    });
  };

   result() {
    return (
    <Card className="result sr">
    <CardImg top width="0%" height ="480px" src="/img_titanic.jpg" alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">Titanic</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">126 wins & 83 nominations total
</CardSubtitle>
      <CardText>Titanic: Directed by James Cameron. With Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates. A seventeen-year-old aristocrat falls in love with a kind </CardText>
      <Button className="styledButton">Buy</Button>
    </CardBody>
  </Card>
    )
  }
 
  render() {
    return (
      <>
        <h1 className="title">{this.state.title}</h1>    
          <div className= "fuzzy">
       <FuzzySearch
      list={this.state.movies}
      keys={['author', 'title']}
      width={430}
      style={{all: 'unset'}}
      onSelect={(newSelectedItem) => {this.handleOnSearch(newSelectedItem)  }}
      className="fuzzy"

    />
    </div>

    {this.state.result === null ? <p> </p>: this.result()}
      </>
    );
  }
}
