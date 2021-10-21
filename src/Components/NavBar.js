import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import NavLogo from "../assets/shared/logo.svg";

const StyledNav = styled.nav`
  // Desktop View
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 55px;
  padding-top: 40px;

  height: 96px;
  width: 100%;

  .nav-links-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    background-color: white;
    width: 57.6388%;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
  }
`;

export default function NavBar({ currentPage, setCurrentPage }) {
  return (
    <StyledNav>
      <img className="nav-logo" src={NavLogo} />
      <div className="nav-links-container">
        <Link to="/">Home</Link>
      </div>
    </StyledNav>
  );
}
