import React from "react";

const Services = ({ size }) => {
  return (
    <img
      src="/iconos/servicios.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Services;
