import React from "react";

const IgLight = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src="/iconos/instagram_blanco.png"
        style={{ width: "30px", height: "30px" }}
      />
    </a>
  );
};

export default IgLight;
