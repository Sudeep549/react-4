import React from "react";
import Home from "./Components/Home";
import Students from "./Components/Student";
import { Contact } from "./Components/Contact";
import { Header } from "./Components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Data from "./Components/Data";

const App = () => {
  return (
    <div id="main_container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/edit_data/:selectedid" element={<Data />}></Route>
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
