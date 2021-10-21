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
    width: 57.6388%;

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);

    navText {
      text-transform: uppercase;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      width: max-content;
      height: inherit;

      &:hover {
        border-bottom: 3px solid var(--white-color-opac50);
        mix-blend-mode: normal;
      }
    }

    a.active-nav-link {
      border-bottom: 3px solid var(--white-color);
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
  const changePage = (e) => {
    const clickedOnLinkName = e.target.closest("a")?.dataset.name;
    if (!clickedOnLinkName) return;

    setCurrentPage(clickedOnLinkName);

    // adding and removing classes to activate the nav links
    const clickedOnLink = e.target.closest("a");
    clickedOnLink.classList.add("active-nav-link");

    const allOtherLinks = e.target
      .closest(".nav-links-container")
      .querySelectorAll("a");

    allOtherLinks.forEach((link) => {
      if (clickedOnLink !== link) link.classList.remove("active-nav-link");
    });
  };

  return (
    <StyledNav>
      <Link to="/">
        <img className="nav-logo" src={NavLogo} alt="home page link" />
      </Link>

      <div onClick={changePage} className="nav-links-container">
        <Link
          to="/"
          data-name="home"
          //   defaults this link to have this classname based on the current state
          className={currentPage === "home" ? "active-nav-link" : null}
        >
          <p className="navText">
            <b className="navBold">00</b> Home
          </p>
        </Link>
        <Link to="/" data-name="destination">
          <p className="navText">
            <b className="navBold">01</b> Destination
          </p>
        </Link>
        <Link to="/" data-name="crew">
          <p className="navText">
            <b className="navBold">02</b> Crew
          </p>
        </Link>
        <Link to="/" data-name="technology">
          <p className="navText">
            <b className="navBold">03</b> Technology
          </p>
        </Link>
      </div>
    </StyledNav>
  );
}