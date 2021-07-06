import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,CardDeck
} from 'reactstrap';
import MoviesService from "../services/MoviesService";
import Spinner from "./Spinner";
export class Home extends Component {
  static displayName = Home.name;

  constructor(props){
    super(props);
    this.state =
    {
      movies : [],
      loading:true
    };
  }

  async componentDidMount() {
    this.setState({
      movies: await MoviesService.getSuggestions(),
      loading:false
    });
  }

  render() {
    if(this.state.loading) return(<Spinner></Spinner>)
    return (
      <div>
        <h1 className="title">
          MOVIES TO BUY OR RENT ON <br></br>
          BLU-RAY, DVD & DIGITAL
        </h1>
        <CardDeck>
        {this.state.movies.map(movie => 
        
        <Card style={{width:'350px',height:'400px',marginTop:'3%'}}>
        <CardImg top src={movie.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{movie.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{movie.genre}</CardSubtitle>
          <CardText>{movie.description}</CardText>
          <Button className="styledButton">Buy Or Rent</Button>
        </CardBody>
      </Card>
        
        ) }

       
     
    </CardDeck>
      </div>
    );
  }
}
