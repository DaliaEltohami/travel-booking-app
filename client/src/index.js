import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Redister from "./pages/Redister";
import SearchList from "./pages/SearchList";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tours/:tourId" element={<TourDetails />} />
        <Route path="tours-search-list" element={<SearchList />} />
        <Route path="register" element={<Redister />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
