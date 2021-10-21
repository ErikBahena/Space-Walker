import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import NavLogo from "../assets/shared/logo.svg";

const StyledNav = styled.nav`
  // Desktop View
  display: flex;
  justify-content: space-between;
`;

export default function NavBar() {
  return (
    <StyledNav>
      <img className="nav-logo" src={NavLogo} />
      <div className="nav-links-container">
        <Link to="/">Home</Link>
      </div>
    </StyledNav>
  );
}
