import React from "react";

const WppLight = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src="/iconos/whatsapp_blanco.png"
        style={{ width: "30px", height: "30px" }}
      />
    </a>
  );
};

export default WppLight;
