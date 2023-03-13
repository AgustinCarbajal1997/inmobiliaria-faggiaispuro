import React from "react";

const Price = ({ size }) => {
  return (
    <img
      src="/iconos/dinero.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Price;
