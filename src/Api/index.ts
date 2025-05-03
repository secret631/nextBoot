import axios from "axios";

export const Api_Public = axios.create({
    baseURL: "http://localhost:3000",
  });
  
  export const Api_Private = axios.create({
    baseURL: "http://localhost:3000",
  });