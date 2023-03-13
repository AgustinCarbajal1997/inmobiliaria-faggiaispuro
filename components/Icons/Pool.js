import React from "react";

const Pool = ({ size }) => {
  return (
    <img
      src="/iconos/pileta.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Pool;
