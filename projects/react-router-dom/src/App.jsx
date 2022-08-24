import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Homepage</>} />
        <Route path="/about" element={<>About</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
