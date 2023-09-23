// Import the axios library for making HTTP requests
import axios from "axios";

// Define an asynchronous function named 'login' that takes an email and password as parameters
export default async function login(email: string, password: string) {
  try {
    // Send a GET request to the specified URL with email and password as query parameters
    const response = await axios.get("https://reqres.in/api/login", {
      params: {
        email: email, // Email parameter
        password: password, // Password parameter
      },
    });

    // Return the response received from the API
    return response;
  } catch (error) {
    // If an error occurs during the request, throw the error to handle it elsewhere
    throw error;
  }
}
