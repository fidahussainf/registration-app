import axiosClient from "..";

class userAPI {
  static getAllUsers() {
    return axiosClient.get("https://mocki.io/v1/1cd47d81-0ed6-41e7-bc2b-c20c363eb4a2");
  }
}
export default userAPI;