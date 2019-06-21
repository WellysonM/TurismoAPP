import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.6:33333/"
});

export default api;
