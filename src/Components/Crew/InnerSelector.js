import React from "react";

import styled from "styled-components";

const StyledInnerSelector = styled.div`
  display: flex;
  width: 132px;
  justify-content: space-between;
  margin-bottom: 94px;

  div {
    height: 15px;
    aspect-ratio: 1;
    background-color: white;
    opacity: 0.17;
    border-radius: 50%;

    -webkit-transition: opacity 0.2s ease-in-out;
    transition: opacity 0.2s ease-in-out;
  }

  div.active,
  div:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export default function InnerSelector({ currentCrewMember, handleCrewChange }) {
  const handleClick = (e) => {
    handleCrewChange(e.target.dataset.name);
  };

  return (
    <StyledInnerSelector>
      <div
        onClick={handleClick}
        className={currentCrewMember === "douglas" ? "active" : ""}
        data-name="douglas"
      ></div>
      <div
        onClick={handleClick}
        className={currentCrewMember === "mark" ? "active" : ""}
        data-name="mark"
      ></div>
      <div
        onClick={handleClick}
        className={currentCrewMember === "victor" ? "active" : ""}
        data-name="victor"
      ></div>
      <div
        onClick={handleClick}
        className={currentCrewMember === "anousheh" ? "active" : ""}
        data-name="anousheh"
      ></div>
    </StyledInnerSelector>
  );
}
