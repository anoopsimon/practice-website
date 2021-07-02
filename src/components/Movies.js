import { any } from 'prop-types';
import React, { Component } from 'react';
 import FuzzySearch from 'react-fuzzy'
 import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

export class Movies extends Component {
  static displayName = Movies.name;

  constructor(props) {
    super(props);
    this.state = { 
      currentCount: 0 ,
      title:'Movies',
      movies:[],
      result:null

         
   };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.render = this.render.bind(this);
  }

  componentDidMount() {
    this.getMovieList();
  }

  async getMovieList() {
    const response = await fetch('http://localhost:8081/movies');
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
    <Card className="result">
    <CardImg top width="0%" src="/img_titanic.jpg" alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">Titanic</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">126 wins & 83 nominations total
</CardSubtitle>
      <CardText>Titanic: Directed by James Cameron. With Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates. A seventeen-year-old aristocrat falls in love with a kind </CardText>
      <Button>Buy</Button>
    </CardBody>
  </Card>
    )
  }
 
  render() {
    return (
      <>
        <h1>{this.state.title}</h1>      
       <FuzzySearch
      list={this.state.movies}
      keys={['author', 'title']}
      className="fuzzy"
      width={430}
      style= {{marginLeft:'50px'}}
      onSelect={(newSelectedItem) => {this.handleOnSearch(newSelectedItem)
      }}
    />

    {this.state.result === null ? <p> </p>: this.result()}
      </>
    );
  }
}
