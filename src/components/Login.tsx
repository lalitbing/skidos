import { FormEvent, useState } from "react";
import Button from "../helper_components/Button";
import login from "../api/login";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Login() {
  // Initialize state for user credentials
  const [userCred, setUserCred] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const navigate = useNavigate();

  // Function to handle input changes and update state
  const onInputChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserCred((prevUserCred) => ({ ...prevUserCred, [name]: value }));
  };

  // Function to handle form submission
  const onSubmit = async (event: FormEvent) => {
    event?.preventDefault();
    try {
      // Call the login API with user credentials
      const response = await login(
        userCred.email.trim(),
        userCred.password.trim()
      );
      // Check the response status
      if (response.status === 200) {
        // Store login status and user data in sessionStorage
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("userData", "");
        console.log("successfully logged in ");
        // Redirect to the dashboard page
        navigate("/dashboard");
      } else {
        console.log("some error");
        // Clear sessionStorage if there's an error
        sessionStorage.clear();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Render the LoginNavbar component and pass the onSubmit function */}
      <Navbar loginuser={(e: any) => onSubmit(e)} />
      <div className="flex justify-center items-center screenHeight bg-[#F8FAFC] w-full">
        <div className="formContainer">
          <h1 className="mb-5 font-bold text-2xl">Log In</h1>
          <form
            onSubmit={(e: FormEvent) => onSubmit(e)} // Handle form submission
            className="flex flex-col"
          >
            <label className="mb-[5px]" htmlFor="email">
              Email
            </label>
            <input
              className="max-w-full px-5 md:max-w-1/2 border shadow-[5px_5px_5px_#F0F2F4] mb-2.5 p-[5px] rounded-[5px] border-solid border-[#E3E8EF]"
              name="email"
              id="email"
              type="email"
              autoComplete="on"
              placeholder="Enter your email address"
              onChange={(e: FormEvent) => onInputChange(e)} // Handle input change
              value={userCred.email}
            />
            <label className="mb-[5px]" htmlFor="password">
              Password
            </label>
            <input
              className="max-w-full px-5 md:max-w-1/2 border shadow-[5px_5px_5px_#F0F2F4] mb-2.5 p-[5px] rounded-[5px] border-solid border-[#E3E8EF]"
              name="password"
              id="password"
              type="password"
              autoComplete="on"
              placeholder="Enter your password"
              onChange={(e: FormEvent) => onInputChange(e)} // Handle input change
              value={userCred.password}
            />
            <div className="flex justify-end w-full mt-5">
              {/* Render the Button component for submitting the form */}
              <Button name="Log in" onSubmit={onSubmit} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
