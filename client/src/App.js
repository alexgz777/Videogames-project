import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Post from "./components/Post";
import Details from "./components/Details";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/post" element={<Post />} />
        <Route path="/home/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
