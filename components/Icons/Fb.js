import React from "react";

const Fb = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src="/iconos/facebook_gris.png"
        style={{ width: "30px", height: "30px" }}
      />
    </a>
  );
};

export default Fb;
