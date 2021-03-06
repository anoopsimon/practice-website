const API_URL = process.env.REACT_APP_MOVIES_SERVICE_URL;

class MoviesService {
  async getSuggestions() {
    const response = await fetch(API_URL + "suggestions");
    return await response.json();
  }

  async populateRentalHistory() {
    const response = await fetch(API_URL + "rentalHistory");
    return await response.json();
  }

  async getMovieList() {
    const response = await fetch(API_URL + "movies");
    return await response.json();
  }
}

export default new MoviesService();
