import axios from "axios";


const API_URL = "http://localhost:8080/api/auth/";

class AuthService {

   timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

    loginAs(){

        localStorage.setItem("user", JSON.stringify({"token":"ey78788788787asd78asd78sa7d8s7d8a7sd88d7s8a7d8as7d87sd87ad87djkdhkjdhjsadhsa9d8y7s9d78sd789asdsajkdhsajkdh"}));
         this.timeout(5000);
        return true;
    }

   

  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
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
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();