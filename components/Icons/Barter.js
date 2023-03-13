import React from "react";

const Barter = ({ size }) => {
  return (
    <img
      src="/iconos/permuta.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Barter;
