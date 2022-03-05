import React from "react";
import { useParams } from "react-router-dom";
import "./Style/style.css";

const Data = () => {
  const { selectedid } = useParams();
  return (
    <>
      <div>editable Data about student {selectedid}</div>
    </>
  );
};

export default Data;
