import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Application from "./components/applicationPage";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import { useAuth } from "./context/authContext";
import "./custom.css"

function App() {
  const { token } = useAuth();
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
          {token && <Route path="/application" element={<Application />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
