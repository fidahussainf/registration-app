import axiosClient from "..";

class userAPI {
  // static getAllUsers() {
  //   return axiosClient.get("https://mocki.io/v1/1cd47d81-0ed6-41e7-bc2b-c20c363eb4a2");
  // }

  static getAllUsers() {
    return Promise.resolve({
      data: [
        {
          id: 1,
          user_name: "John Doe",
          email: "john@example.com",
          phone: "1234567890",
        },
        {
          id: 2,
          user_name: "Jane Smith",
          email: "jane@example.com",
          phone: "0987654321",
        },
        {
          id: 3,
          user_name: "Alice Johnson",
          email: "alice@example.com",
          phone: "1112223333",
        },
        {
          id: 4,
          user_name: "Bob Williams",
          email: "bob@example.com",
          phone: "4445556666",
        },
        {
          id: 5,
          user_name: "Charlie Brown",
          email: "charlie@example.com",
          phone: "7778889999",
        },
      ],
    });
  }
}
export default userAPI;
