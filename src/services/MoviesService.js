
const API_URL = process.env.REACT_APP_MOVIES_SERVICE_URL ;

class MoviesService {
 
  async getSuggestions()
  {
   const response =  await fetch(API_URL +'suggestions');
   return await response.json();
 };

}

  
export default new MoviesService();
