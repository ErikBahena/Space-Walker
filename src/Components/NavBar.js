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

    navText {
      text-transform: uppercase;
    }

    a:nth-of-type(1) {
      margin-right: 48px;
    }
    a:nth-of-type(2) {
      margin-right: 48px;
    }
    a:nth-of-type(3) {
      margin-right: 48px;
    }
  }
`;

export default function NavBar({ currentPage, setCurrentPage }) {
  return (
    <StyledNav>
      <img className="nav-logo" src={NavLogo} />
      <div className="nav-links-container">
        <Link to="/">
          <navText>
            <navBold>00</navBold> Home
          </navText>
        </Link>
        <Link to="/">
          <navText>
            <navBold>01</navBold> Destination
          </navText>
        </Link>
        <Link to="/">
          <navText>
            <navBold>02</navBold> Crew
          </navText>
        </Link>
        <Link to="/">
          <navText>
            <navBold>03</navBold> Technology
          </navText>
        </Link>
      </div>
    </StyledNav>
  );
}
