import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://apiverso.tsunode.com.br',
  timeout: 10000,
});
