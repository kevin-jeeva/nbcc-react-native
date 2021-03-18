import client from "./client";

const endpoint = "/user";

//get all the users from the endpoint
const getAllUsers = () => client.get(endpoint);

//get one user
const getUser = (userId) => client.get(endpoint + "/" + userId);

//get a user by their email
const getUserbyEmail = (email) => client.get(endpoint + "/" + email);

//get the user with respect to their email address
const login = (email, password) =>
  client.post(endpoint + "/" + email + "/" + password);

//get user phone by their id
const getPhoneById = (userId) => client.get(endpoint + "/phone/" + userId);

const changePassword = (email, password) =>
  client.post(endpoint + "/changePassword/" + email + "/" + password);

export default {
  getAllUsers,
  getUserbyEmail,
  getUser,
  login,
  getPhoneById,
  changePassword,
};
