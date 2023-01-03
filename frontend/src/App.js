import { Routes, Route, Router } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import AddTodo from "./routes/AddTodo";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/addTodo" element={<AddTodo />} />
      </Routes>
    </div>
  );
}

export default App;
