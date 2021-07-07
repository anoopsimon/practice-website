import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const API_URL = process.env.REACT_APP_MOVIES_SERVICE_URL;
const headers={
  'Content-Type': 'application/json'
};

class AuthService {
  loginAs() {
    localStorage.setItem(
      "user",
      JSON.stringify({
        token:
          "ey78788788787asd78asd78sa7d8s7d8a7sd88d7s8a7d8as7d87sd87ad87djkdhkjdhjsadhsa9d8y7s9d78sd789asdsajkdhsajkdh",
      })
    );
    setTimeout(() => {
      console.log("wait!!!!!");
    }, 10000);
    return true;
  }

  async createUser(username, password) {
    await axios
      .post(API_URL+'users', {
        password: password,
        email: username,
        id:uuidv4()
      },headers)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // fetch(API_URL+'signup', requestOptions)
    // .then(response => response.json())
  }

  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
