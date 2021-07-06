import React, { Component } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import { Table } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import Spinner from './Spinner';


export class Orders extends Component {
  static displayName = Orders.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true,color:'purple',title:'Movie Rental History' };
  }

  componentDidMount() {
    this.populateRentalHistory();
  }

  static renderForecastsTable(forecasts) {
    return (
      <Card style={{borderRadius:'10px'}}>
      <Table  aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.movie}</td>
              <td>{forecast.genre}</td>
              <td>{forecast.releaseDate}</td>
              <td>{forecast.price}</td>
              <td>
              <StarRatings
              rating={forecast.rating}
              numberOfStars={5}
              name='rating'
              starRatedColor='yellow'
              starDimension="18px"
              />
              </td>
              <td>{forecast.date }</td>
            </tr>
          )}
        </tbody>
      </Table>
      </Card>
    );
  }

  render() {
    let contents = this.state.loading
      ?       <Spinner />

      : Orders.renderForecastsTable(this.state.forecasts);

    return (
      <div>
        {/* <h1 id="tabelLabel" >{this.state.title}</h1> */}
        <h1 className="title">{this.state.title}</h1>    

        <p>Below is the list of movies you have rented in the past</p>
        {contents}
        
      </div>
    );
  }

  async populateRentalHistory() {
    const response = await fetch(process.env.REACT_APP_MOVIES_SERVICE_URL + 'rentalHistory');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
