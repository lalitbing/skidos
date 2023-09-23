import { useNavigate } from "react-router-dom";
import Button from "../helper_components/Button.js";

// Define the props interface for the Navbar component
interface NavbarProps {
  loginuser?: Function;
}

// Define the Navbar component
function Navbar(props: NavbarProps) {
  // Access the navigation function from react-router-dom
  const navigate = useNavigate();
  const { loginuser } = props; // Destructure loginuser prop
  const isLoggedIn = sessionStorage.getItem("loggedIn"); // Check if the user is logged in
  let logoURL = new URL("../assets/skidos-logo.jpg", import.meta.url).href;

  // Function to log out the user
  function logoutuser() {
    sessionStorage.clear(); // Clear session storage
    navigate("/"); // Navigate to the home page
  }

  return (
    <>
      <div className="flex justify-between p-3 border-b-2 border-[#E3E8EF]">
        <div className="flex justify-around gap-5">
          <img
            id="logo"
            src={logoURL}
            alt="Skidos Logo"
            className="w-28 h-14"
          />
          <h2 className="text-center self-center">Announcements</h2>
        </div>
        {isLoggedIn ? ( // Conditionally render Log out or Log in button based on user login status
          <Button name="Log out" onClick={logoutuser} />
        ) : (
          <Button name="Log in" onClick={loginuser} />
        )}
      </div>
    </>
  );
}

export default Navbar;
