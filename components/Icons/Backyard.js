import React from "react";

const Backyard = ({ size }) => {
  return (
    <img
      src="/iconos/patio.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Backyard;
