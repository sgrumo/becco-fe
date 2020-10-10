import axios from 'axios';

const baseUrl = `http://localhost:3000/api`

const API = axios.create({
  baseURL: baseUrl
});


// Auth
export const signIn = (email, password) => {
  return API.post('/auth/signin', { email, password });
}

export const signUp = (username, email, password) => {
  return API.post('/auth/signup', { username, email, password });
}

// Matches
export const getMatches = () => {
  const token = sessionStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return API.get('/matches', config);
}

export const createMatch = (name, visibility, password) => {
  const token = sessionStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return API.post('/matches', { name, visibility, password }, config);
}

export const joinMatch = (id, password) => {
  const token = sessionStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return API.patch('/matches', { id, password }, config);
}
