import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Life from "./components/Life.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="life" element={<Life />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
