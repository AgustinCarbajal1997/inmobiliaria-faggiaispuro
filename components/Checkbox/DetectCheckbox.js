import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
const DetectCheckbox = ({ checked, onChange, onDetectCheck }) => {
  const onPress = () => {
    onChange(!checked);
    onDetectCheck();
  };

  return (
    <div
      onClick={onPress}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "22px",
        height: "22px",
        border: "1px solid #adadad",
        cursor: "pointer",
        padding: "2px",
        backgroundColor: checked ? "#3e849e" : "transparent",
        borderRadius: "5px",
        margin: "10px 0px",
      }}
    >
      {checked && <AiOutlineCheck size={20} color="#ffffff" />}
    </div>
  );
};

export default DetectCheckbox;
