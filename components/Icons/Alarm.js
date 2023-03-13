import React from "react";

const Alarm = ({ size }) => {
  return (
    <img
      src="/iconos/alarma.png"
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
      }}
    />
  );
};

export default Alarm;
