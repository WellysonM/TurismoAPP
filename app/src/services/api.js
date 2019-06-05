import axios from "axios";

const api = axios.create({
  baseURL: "http://172.23.150.247:3000/"
});

export default api;
