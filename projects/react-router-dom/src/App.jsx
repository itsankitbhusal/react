import React, { useState } from "react";
import { Link } from "react-router-dom";
const App = () => {
  const [id, setId] = useState();
  return (
    <div>
      <div>This is a homepage</div> <br />
      <Link to="/contact">Contact</Link> |<Link to="/about">About</Link> |
      <Link to="/post">Post</Link>
      <br />
      <br />
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <Link to={`/post/${id}`}>Post with value</Link>{" "}
    </div>
  );
};

export default App;
