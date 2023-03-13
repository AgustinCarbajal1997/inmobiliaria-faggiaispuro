import React from "react";

const Garage = ({ size }) => {
  return (
    <img
      src="/iconos/cocheras.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Garage;
