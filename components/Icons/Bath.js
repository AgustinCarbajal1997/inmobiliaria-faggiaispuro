import React from "react";

const Bath = ({ size }) => {
  return (
    <img
      src="/iconos/bath.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Bath;
