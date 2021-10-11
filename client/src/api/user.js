import axios from "axios";

export const apiLogin = (request_data) => {
  return axios.post("/api/v1/auth", request_data);
};

export const fetchProfile = () => {
  return axios.get("/api/v1/me");
};

//http://localhost:5000/
