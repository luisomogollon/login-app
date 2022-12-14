import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login.jsx";
import Create from "./routes/Create.jsx";

import { Layout } from "./Layout";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout/>}>
        <Route index element={<Login />} />
          <Route path="Create" element={<Create />} />
          
        </Route>
      </Routes>
    </BrowserRouter>

);