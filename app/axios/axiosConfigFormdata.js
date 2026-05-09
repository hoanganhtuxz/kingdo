import axios from "axios";

export default axios.create({
  baseURL: "https://demo-api-kinhdo.aivgroup.vn/",
  headers: {
    // Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});
