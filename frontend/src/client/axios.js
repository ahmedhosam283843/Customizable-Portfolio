import axios from "axios";

const token =
  localStorage.getItem("access_token") ||
  sessionStorage.getItem("access_token");

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axios.defaults.headers.post["Authorization"] = `Bearer ${token}`;

export default axios.create({
  baseURL: "http://localhost:5000",
});
