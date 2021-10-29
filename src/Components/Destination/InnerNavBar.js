import React from "react";
import styled from "styled-components";

const StyledInnerNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 45px;
  width: 100%;
  margin: 0 auto;
  color: var(--light-purple);

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    margin: 0 0;
    text-transform: uppercase;
    color: var(--white-color);

    &:hover {
      border-bottom: 3px solid var(--white-color-opac50);
      mix-blend-mode: normal;
    }
  }

  p.active-nav-link {
    border-bottom: 3px solid var(--white-color);
  }

  p:nth-of-type(1) {
    margin-right: 10%;
  }
  p:nth-of-type(2) {
    margin-right: 10%;
  }
  p:nth-of-type(3) {
    margin-right: 10%;
  }
`;

function InnerNavBar({ handlePlanetChange }) {
  const handleClick = (e) => {
    const clickedOnPlanetLink = e.target.closest("p.navText");
    if (!clickedOnPlanetLink) return;

    // CallBack to change state
    handlePlanetChange(clickedOnPlanetLink.innerText.toLowerCase());

    // Removing active style from anything that already has it
    e.target.parentElement
      .querySelectorAll("p.active-nav-link")
      .forEach((el) => el.classList.remove("active-nav-link"));

    // Adding the active className to the one we click on
    clickedOnPlanetLink.classList.add("active-nav-link");
  };

  return (
    <StyledInnerNavBar>
      <p onClick={handleClick} className="navText active-nav-link">
        Moon
      </p>
      <p onClick={handleClick} className="navText">
        Mars
      </p>
      <p onClick={handleClick} className="navText">
        Europa
      </p>
      <p onClick={handleClick} className="navText">
        Titan
      </p>
    </StyledInnerNavBar>
  );
}

export default InnerNavBar;
