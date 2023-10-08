import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Create from "../pages/create";
import ProductDetail from "../pages/productdetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/create"} element={<Create />} />
        <Route path={"/product/:id"} element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
