import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import NavLogo from "../assets/shared/logo.svg";

const StyledNav = styled.nav`
  // Desktop View
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 6%;
  padding-top: 2%;

  height: max-content;
  width: 100%;

  .nav-links-container {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 96px;
    width: 57.6388%;

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);

    .navText {
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

  // Laptop Responsiveness
  @media (max-width: 1100px) {
    .nav-links-container {
      width: 80%;
    }
  }

  // Tablet Responsiveness

  @media (max-width: 800px) {
    padding-top: 0;
    .nav-links-container {
      width: 80%;

      a:nth-of-type(1) {
        margin-right: 5%;
      }
      a:nth-of-type(2) {
        margin-right: 5%;
      }
      a:nth-of-type(3) {
        margin-right: 5%;
      }
    }
  }

  // Mobile Responsiveness
  @media (max-width: 700px) {
    .nav-logo {
      height: 40px;
      width: 40px;
    }
    .nav-links-container {
      display: none;
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
          //   if the current page is the the corresponding link then add that classname
          className={currentPage === "home" ? "active-nav-link" : null}
        >
          <p className="navText">
            <b className="navBold">00</b> Home
          </p>
        </Link>

        <Link
          to="/destination"
          data-name="destination"
          className={currentPage === "destination" ? "active-nav-link" : null}
        >
          <p className="navText">
            <b className="navBold">01</b> Destination
          </p>
        </Link>

        <Link
          to="/crew"
          data-name="crew"
          className={currentPage === "crew" ? "active-nav-link" : null}
        >
          <p className="navText">
            <b className="navBold">02</b> Crew
          </p>
        </Link>

        <Link
          to="/technology"
          data-name="technology"
          className={currentPage === "technology" ? "active-nav-link" : null}
        >
          <p className="navText">
            <b className="navBold">03</b> Technology
          </p>
        </Link>
      </div>
    </StyledNav>
  );
}
