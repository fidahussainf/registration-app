import axios from "axios";
const API_URL = process.env.REACT_APP_BACKEND_LINK;
let options = {
  baseURL: API_URL,
};
// Interceptors
const axiosClient = axios.create(options);
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    if (localStorage.getItem("token")) {
      config.headers.Authorization = localStorage.getItem("token");
      config.headers["ngrok-skip-browser-warning"] = true;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// Add a response interceptor
axiosClient.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
    //   store.dispatch(
    //     setAuthData({
    //       currentUser: null,
    //       token: null,
    //     })
    //   );
    } else if (error.response.status === 422 || error.response.status === 404) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
