import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
