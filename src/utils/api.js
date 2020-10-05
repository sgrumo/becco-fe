import axios from 'axios';

const baseUrl = `http://${process.env.BASE_URL}:${process.env.API_PORT}/api`

export const signIn = (email, password) => {
  return axios.post(`${baseUrl}/users/login`, { email, password });
}

export const signUp = (username, email, password) => {
  return axios.post(`${baseUrl}/users/login`, { username, email, password });
}
