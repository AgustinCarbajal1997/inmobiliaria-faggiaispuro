import React from "react";

const Laundry = ({ size }) => {
  return (
    <img
      src="/iconos/lavadero.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Laundry;
