import React from "react";

const Ig = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src="/iconos/instagram_gris.png"
        style={{ width: "30px", height: "30px" }}
      />
    </a>
  );
};

export default Ig;
