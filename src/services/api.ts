import axios from "axios";

export const KEY = "357c2f2b";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com/"
});

export default api;