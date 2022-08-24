import React from "react";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <div>This is a homepage</div> <br />
      <Link to="/contact">Contact</Link> | <Link to="/about">About</Link>
    </div>
  );
};

export default App;
