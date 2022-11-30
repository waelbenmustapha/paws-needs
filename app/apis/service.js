import axios from "axios";

const baseUrl = "http://192.168.1.12:3000";

export async function login(data) {
  const res = await axios.post(`${baseUrl}/auth/login`, data);
  console.log(data);
  console.log(res);
  return res;
}

export function register({ email, username, password, confirmPassword }) {
  const data = {
    username,
    email,
    password1: password,
    password2: confirmPassword,
  };
  return fetch(`${baseUrl}/auth/registration/`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
