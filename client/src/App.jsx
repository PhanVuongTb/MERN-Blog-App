import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Create from "./pages/Create";
import BlogDetails from "./pages/BlogDetails";
import UpdateBlog from "./pages/UpdateBlog";
import { useSelector } from "react-redux";

import "./App.css";
import Navbar from "./components/Navbar";
import LayoutWeb from "./Layout/LayoutWeb";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWeb />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogDetails/:id" element={<BlogDetails />} />
          <Route path="/updateBlog/:id" element={<UpdateBlog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
