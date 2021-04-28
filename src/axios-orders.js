import axios from "axios";

const instance = axios.create({
  baseURL: "https://fossil-f363f-default-rtdb.firebaseio.com/",
});

export default instance;
