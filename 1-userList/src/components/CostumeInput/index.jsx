import React from "react";
import styled from "./CostumeInput.module.scss";

const CostumeInput = ({ label, onChange, variant, value }) => {
  return (
    <div className={styled.inputDiv}>
      <label className={styled.labelCard} htmlFor="input-card">
        {label}
      </label>
      <input
        id="input-card"
        className={styled.costumeInput}
        type={variant}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CostumeInput;
