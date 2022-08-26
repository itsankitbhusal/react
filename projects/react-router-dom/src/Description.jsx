import React from "react";
import { useParams } from "react-router-dom";

const Description = () => {
  const { did } = useParams();
  return <div>Description with id {did}</div>;
};

export default Description;
