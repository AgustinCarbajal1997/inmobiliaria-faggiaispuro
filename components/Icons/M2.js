import React from "react";

const M2 = ({ size }) => {
  return (
    <img
      src="/iconos/medidas.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default M2;
