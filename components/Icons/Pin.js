import React from "react";

const Pin = ({ size }) => {
  return (
    <img
      src="/iconos/ubicacion.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Pin;
