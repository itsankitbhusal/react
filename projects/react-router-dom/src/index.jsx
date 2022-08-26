import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Post from "./Post";
import Description from "./Description";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />}>
          <Route path="/post/:id" element={<Post />}>
            <Route
              path="/post/:id/description/:did"
              element={<Description />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
