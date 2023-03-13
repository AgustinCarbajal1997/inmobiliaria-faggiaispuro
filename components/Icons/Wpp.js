import React from "react";

const Wpp = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img
        src="/iconos/whatsapp.png"
        style={{ width: "30px", height: "30px" }}
      />
    </a>
  );
};

export default Wpp;
