import axios from "axios";

export default axios.create({
  // baseURL: "https://demo-api-kinhdo.aivgroup.vn/",
  baseURL: process.env.NEXT_PUBLIC_APP_API,
});
