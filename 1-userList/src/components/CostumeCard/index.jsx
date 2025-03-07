import React from "react";
import styled from "./CostumeCard.module.scss";

const CostumeCard = ({ children }) => {
  return <div className={styled.card}>{children}</div>;
};

export default CostumeCard;
