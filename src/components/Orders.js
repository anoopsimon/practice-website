import React, { Component } from "react";
import { Table } from "reactstrap";
import StarRatings from "react-star-ratings";
import {  Card } from "reactstrap";
import Spinner from "./lib/Spinner";
import MoviesService from "../services/MoviesService";

export class Orders extends Component {
  static displayName = Orders.name;

  constructor(props) {
    super(props);
    this.state = {
      forecasts: [],
      loading: true,
      color: "purple",
      title: "Movie Rental History",
    };
  }

  async componentDidMount() {
    const rentalHistory = await MoviesService.populateRentalHistory();
    this.setState({ forecasts: rentalHistory, loading: false });
  }

  static renderForecastsTable(forecasts) {
    return (
      <Card style={{ borderRadius: "10px" }}>
        <Table aria-labelledby="tabelLabel">
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
            {forecasts.map((forecast) => (
              <tr key={forecast.date}>
                <td>{forecast.movie}</td>
                <td>{forecast.genre}</td>
                <td>{forecast.releaseDate}</td>
                <td>{forecast.price}</td>
                <td>
                  <StarRatings
                    rating={forecast.rating}
                    numberOfStars={5}
                    name="rating"
                    starRatedColor="yellow"
                    starDimension="18px"
                  />
                </td>
                <td>{forecast.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <Spinner />
    ) : (
      Orders.renderForecastsTable(this.state.forecasts)
    );

    return (
      <div>
        <h1 className="title">{this.state.title}</h1>
        <p>Below is the list of movies you have rented in the past</p>
        {contents}
      </div>
    );
  }
}
