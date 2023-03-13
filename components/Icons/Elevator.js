import React from "react";

const Elevator = ({ size }) => {
  return (
    <img
      src="/iconos/ascensor.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Elevator;
