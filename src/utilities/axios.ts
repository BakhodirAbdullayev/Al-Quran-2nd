import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.alquran.cloud/v1/",
  timeout: 60000,
  // headers: {'X-Custom-Header': 'foobar'}
});
export const timeURL = axios.create({
  baseURL: "https://islomapi.uz/api/present/",
  timeout: 60000,
  // headers: {'X-Custom-Header': 'foobar'}
});
