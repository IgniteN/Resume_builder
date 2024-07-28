
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import "./components/App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="form" element={<Form />} /> {/* Add this route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
