import React from "react";

const FbLight = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src="/iconos/facebook_blanco.png"
        style={{ width: "30px", height: "30px" }}
      />
    </a>
  );
};

export default FbLight;
