import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { isJwtExpired } from 'jwt-check-expiration';


const API_URL = process.env.REACT_APP_MOVIES_SERVICE_URL;

const headers = {
  "Content-Type": "application/json",
};
const KEYS_USER="user";
const KEYS_TOKEN="token";

class AuthService {
  
  /**
   * Creates a user
   * @param {*} username 
   * @param {*} password 
   */
  async createUser(username, password) {
    const registrationResponse={
      error:null,
      success:false,
      statusCode:0
    };
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
        registrationResponse.success=true;        
      })
      .catch((error) => {
        console.log(error);
        registrationResponse.error = error.response.data;
        registrationResponse.success = false;
        registrationResponse.statusCode= error.response.status;
      });
      
      return registrationResponse;
  }

  /**
   * Perform login returns auth token JWT
   * @param {*} username 
   * @param {*} password 
   * @returns 
   */
  async login(email, password) {
    const loginResponse={
      error:null,
      success:false,
      statusCode:0
    };
    return await axios
      .post(API_URL + "login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem(KEYS_USER, JSON.stringify(email));
          localStorage.setItem(
            KEYS_TOKEN,
            JSON.stringify(response.data.accessToken)
          );
        }
        loginResponse.success=true;
        loginResponse.statusCode=response.status;
        return loginResponse;
      }).catch(error => {
        //"Incorrect password"
        console.log('login failed due to :'+ error.response.data)
        loginResponse.error=error.response.data;
        loginResponse.success=false;
        loginResponse.statusCode= error.response.status;

        return loginResponse;
     });
  }

  /**
   * Logout from the application and clear local storage
   */
  async logout() {
    await this.clearFromLocalStorage([KEYS_USER,KEYS_TOKEN]);
  }

  async isSessionExpired() {
    if(this.getToken() === null) return true;
    return await isJwtExpired(this.getToken());
  }

  /**
   * util function to clear local storage
   * @param {*} keys 
   */
  async clearFromLocalStorage(keys)
  {
    await keys.map( (key,index) => (
      localStorage.removeItem(key)
     )); 
  }

  /**
   * Register a user account
   * @param {Regr} username 
   * @param {*} email 
   * @param {*} password 
   * @returns 
   */
  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  /**
   * 
   * @returns Get current logged in user from local storage
   */
  getCurrentUser() {        
    return JSON.parse(localStorage.getItem(KEYS_USER));
  }

  /**
   * get authentication token
   * @returns 
   */
  getToken() {
    if (localStorage.getItem(KEYS_TOKEN)) 
    {
     return JSON.parse(localStorage.getItem(KEYS_TOKEN));;
    }

    return null;
  }
}



export default new AuthService();
