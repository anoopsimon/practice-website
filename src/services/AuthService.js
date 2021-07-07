import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL = process.env.REACT_APP_MOVIES_SERVICE_URL;
const headers = {
  "Content-Type": "application/json",
};

class AuthService {
  
  /**
   * Creates a user
   * @param {*} username 
   * @param {*} password 
   */
  async createUser(username, password) {
    await axios
      .post(
        API_URL + "users",
        {
          password: password,
          email: username,
          id: uuidv4(),
        },
        headers
      )
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });  
  }

  /**
   * Perform login
   * @param {*} username 
   * @param {*} password 
   * @returns 
   */
  async login(email, password) {
    return await axios
      .post(API_URL + "login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(email));
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.accessToken)
          );
        }

        return response.data;
      });
  }

  async logout() {
    await this.clearFromLocalStorage(["user","token"]);
  }

  async clearFromLocalStorage(keys)
  {
    await keys.map( (key,index) => (
      console.log("deleting " + key),
      localStorage.removeItem(key)
     )); 
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
