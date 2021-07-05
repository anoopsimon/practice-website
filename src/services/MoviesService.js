
const API_URL = "http://localhost:8081/";

class MoviesService {
 
  async getSuggestions()
  {
   const response =  await fetch(API_URL+'suggestions');
   return await response.json();
 };

}

  
export default new MoviesService();
