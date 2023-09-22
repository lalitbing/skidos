
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Protected from "./helper_components/Protected";
import Dashboard from "./components/DashBoard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
