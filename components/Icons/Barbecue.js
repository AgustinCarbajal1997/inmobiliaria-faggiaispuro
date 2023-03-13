import React from "react";

const Barbecue = ({ size }) => {
  return (
    <img
      src="/iconos/parrilla.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Barbecue;
