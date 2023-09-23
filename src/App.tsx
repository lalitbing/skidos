// Import necessary modules from react-router-dom for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components for the application
import Login from "./components/Login";
import Protected from "./helper_components/Protected";
import Dashboard from "./components/DashBoard/Dashboard";

// Define the main App component
function App() {
  return (
    <>
      {/* Set up BrowserRouter to enable routing */}
      <BrowserRouter>
        <Routes>
          {/* Define routes using the Route component */}
          {/* Route 1: Root path ("/") - Display the Login component */}
          <Route path="/" element={<Login />} />

          {/* Route 2: Dashboard path ("/dashboard") - Protected route */}
          <Route
            path="/dashboard"
            element={
              // Use the Protected component to protect the Dashboard route
              <Protected>
                {/* Render the Dashboard component within Protected */}
                <Dashboard />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Export the App component as the entry point of the application
export default App;
