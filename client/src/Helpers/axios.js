import { baseURL } from "../Constants";
const axios = require("axios");

export const getAxios = () => {
  let token = JSON.parse(localStorage.getItem("profile"))?.token;
  return axios.create({
    baseURL: `${baseURL}`,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
