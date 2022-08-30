import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Videos from "./Components/Videos/Videos";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import BlogDetails from "./Components/BlogDetails/BlogDetails";

export const BlogContext = createContext()

function App() {
  const [blogs, setBlogs] = useState([]);
  
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
