import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [did, setDid] = useState();
  return (
    <>
      <div>This is post page {id}</div>
      <br />
      <input
        type="text"
        onClick={(e) => {
          setDid(e.target.value);
        }}
      />
      |
      <Link to={`/post/${id ? id : 0}/description/${did}`}>
        Description with id
      </Link>
      <br />
      <Link to="/">Home</Link>
    </>
  );
};

export default Post;
