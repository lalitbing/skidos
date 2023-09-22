import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: any;
}

const Protected = (prop: ProtectedRouteProps) => {
  const { children } = prop;

  const isLoggedIn = sessionStorage.getItem("loggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
