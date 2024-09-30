import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://helpinghandscharitabletrust-nslsh.ondigitalocean.app", // Set your base URL here
});

export default api;
