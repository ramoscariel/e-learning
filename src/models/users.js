import axios from "axios";
import endpoint from "../config/backUrl";

const usersEndpoint = `${endpoint}/users`;

export const getInstructors = async () => {
  try {
    const response = await axios.get(`${usersEndpoint}/instructors`);
    return response.data;
  } catch {
    return {};
  }
};

export const login = async (email, password) => {
  const response = await axios.post(`${usersEndpoint}/login`, {
    email: email,
    password: password,
  });
  return response.data;
};
