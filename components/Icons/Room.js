import React from "react";

const Room = ({ size }) => {
  return (
    <img
      src="/iconos/dormitorios.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Room;
