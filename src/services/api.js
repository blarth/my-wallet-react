import axios from 'axios';

const BASE_URL = "http://localhost:5000"

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

function getEntries(token){
  const config = createConfig(token)
  const promise = axios.get(`${BASE_URL}/wallet`, config );
  
    return promise
}
  

  const api = {
    login,
    signUp,
    getEntries,
    
  }
  
  export default api;