import axios from "axios";

export default async function login(email: string, password: string) {
  try {
    const response = await axios.get("https://reqres.in/api/login", {
      params: {
        email: email,
        password: password,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}
