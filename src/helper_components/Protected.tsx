import { Navigate } from "react-router-dom";

// Define the props interface for the Protected component
interface ProtectedRouteProps {
  children: any;
}

// Define the Protected component
const Protected = (prop: ProtectedRouteProps) => {
  // Destructure the children from props
  const { children } = prop;

  // Check if the user is logged in by checking sessionStorage
  const isLoggedIn = sessionStorage.getItem("loggedIn");

  // If the user is not logged in, redirect to the home page ("/") and replace the current entry in the history stack
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // If the user is logged in, render the children components
  return children;
};

export default Protected;
