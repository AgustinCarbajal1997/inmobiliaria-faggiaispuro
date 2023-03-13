import React from "react";

const Balcony = ({ size }) => {
  return (
    <img
      src="/iconos/balcon.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Balcony;
