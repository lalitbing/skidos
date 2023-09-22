import { useNavigate } from "react-router-dom";
import Button from "../helper_components/Button.js";

interface NavbarProps {
  loginuser?: Function;
}

function Navbar(props: NavbarProps) {
  const navigate = useNavigate();
  const { loginuser } = props;
  const isLoggedIn = sessionStorage.getItem("loggedIn");
  let logoURL = new URL("../assets/skidos-logo.jpg", import.meta.url).href;

  function logoutuser() {
    sessionStorage.clear();
    navigate("/");
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
        {isLoggedIn ? (
          <Button name="Log out" onClick={logoutuser} />
        ) : (
          <Button name="Log in" onClick={loginuser} />
        )}
      </div>
    </>
  );
}

export default Navbar;
