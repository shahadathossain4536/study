import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Home/Home";
import Signin from "./components/Auth/Signin";
import NotFound from "./Shared/NotFound";
import Course from "./components/Course/Course";
import About from "./components/About/About";

function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="course" element={<Course />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
