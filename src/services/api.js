import axios from 'axios';

const BASE_URL = " https://apimy-wallet.herokuapp.com"

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
function registerTransaction(body, token){
  const config = createConfig(token)
  const promise = axios.post(`${BASE_URL}/entries`, body , config );
  
    return promise
}

function registerChange(body, idEntry, token){
  const config = createConfig(token)
  const promise = axios.put(`${BASE_URL}/entry/${idEntry}`, body , config );
  
    return promise
}

function getEntryById(idEntry, token){
  const config = createConfig(token)
  const promise = axios.get(`${BASE_URL}/entry/${idEntry}`, config );
  
    return promise
}
function deleteEntryById(idEntry, token){
  const config = createConfig(token)
  const promise = axios.delete(`${BASE_URL}/entry/${idEntry}`, config );
  
    return promise
}

  const api = {
    login,
    signUp,
    getEntries,
    registerTransaction,
    registerChange,
    getEntryById,
    deleteEntryById
  }
  
  export default api;