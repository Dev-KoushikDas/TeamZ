import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://teamz.onrender.com/api",
 // withCredentials: true
 // origin:"*"
});

export default newRequest;