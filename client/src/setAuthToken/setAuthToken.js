import Axios from "axios";

const setAuthToken = Token => {
  if(Token) {
    // Appling the token to every request
    Axios.defaults.headers.common['Authorization'] = Token;
  }else{
    // Delete auth header
    delete Axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthToken;