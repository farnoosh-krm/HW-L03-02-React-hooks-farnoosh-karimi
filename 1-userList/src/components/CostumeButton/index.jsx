import React from "react";
import styled from "./CostumeButton.module.scss";

const CostumeButton = ({ label, variant, onClick }) => {
  return (
    <div>
      <button
        className={`${styled.btnStyle} ${styled[variant]}`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default CostumeButton;
