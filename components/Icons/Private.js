import React from "react";

const Private = ({ size }) => {
  return (
    <img
      src="/iconos/barrioprivado.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Private;
