import React from "react";
import { useParams, Link } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return (
    <>
      <div>This is post page {id}</div>

      <Link to="/">Home</Link>
    </>
  );
};

export default Post;
