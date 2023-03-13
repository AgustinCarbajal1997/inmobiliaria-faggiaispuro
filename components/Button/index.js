import React from "react";

const Button = ({ onClickHandle, title }) => {
  return <button onClick={onClickHandle}>{title}</button>;
};

export default Button;
