import client from "./client";

const endpoint = "/user";

//get all the users from the endpoint
const getUser = () => client.get(endpoint);

//get the user with respect to their email address
const login = (email, password) =>
  client.post(endpoint + "/" + email + "/" + password);

export default {
  getUser,
  login,
};
