import React from "react";

const Quincho = ({ size }) => {
  return (
    <img
      src="/iconos/quincho.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Quincho;
