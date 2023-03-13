import React from "react";

const Sum = ({ size }) => {
  return (
    <img
      src="/iconos/hogar.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Sum;
