import axios from 'axios';

const BASE_URL = process.env.BASE_URL;

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}
function signUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
  
    return promise;
  }


function login(body) {
    const promise = axios.post(`${BASE_URL}/login`, body);
  
    return promise;
  }
  

  const api = {
    login,
    signUp,
    
  }
  
  export default api;