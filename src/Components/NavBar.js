import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import NavLogo from "../assets/shared/logo.svg";

const StyledNav = styled.nav`
  max-width: 2000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 6%;
  padding-top: 2.5rem;

  height: max-content;
  width: 100%;

  #menuIcon {
    display: flex;
    flex-direction: column;
    transform: scale(0.7);

    width: 70px;
    margin-right: 4%;
    cursor: pointer;

    @media (min-width: 701px) {
      display: none;
    }

    span {
      background: #fff;
      border-radius: 10px;
      height: 4px;
      margin: 7px 0;
      transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    span:nth-of-type(1) {
      width: 50%;
    }

    span:nth-of-type(2) {
      width: 100%;
    }

    span:nth-of-type(3) {
      width: 75%;
    }

    input[type="checkbox"] {
      display: none;
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(1) {
      transform-origin: bottom;
      transform: rotatez(45deg) translate(8px, 0px);
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(2) {
      transform-origin: top;
      transform: rotatez(-45deg);
    }

    input[type="checkbox"]:checked ~ span:nth-of-type(3) {
      transform-origin: bottom;
      width: 50%;
      transform: translate(30px, -11px) rotatez(45deg);
    }
  }

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

    .close-menu-btn {
      display: none;
      transform: scale(3);
      margin-left: 10px;

      .chevron::before {
        border-style: solid;
        border-color: white;
        border-width: 0.15em 0.15em 0 0;
        content: "";
        display: inline-block;
        height: 0.45em;
        left: 0.15em;
        position: relative;
        top: 0.15em;
        transform: rotate(-45deg);
        vertical-align: top;
        width: 0.45em;
      }

      .chevron.right:before {
        left: 0;
        transform: rotate(45deg);
      }
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
    padding-top: 1.5rem;

    .nav-logo {
      height: 40px;
      width: 40px;
    }

    .nav-links-container {
      display: none;
    }

    .nav-links-container.responsive-active {
      .close-menu-btn {
        display: unset;
        align-self: flex-start;
      }

      position: absolute;
      z-index: 999;
      display: flex;
      flex-direction: column;
      top: 0;

      right: 0;

      height: 100%;

      gap: 10%;

      a {
        height: unset;
        width: 70%;

        display: flex;
        justify-content: flex-start;

        padding: 0 1em;
        margin-right: 0px !important;
      }
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

  const toggleNav = () => {
    const nav = document.querySelector(".nav-links-container");
    nav.classList.toggle("responsive-active");
    console.log("being called");

    console.log(nav);
  };

  return (
    <StyledNav>
      <Link to="/">
        <img className="nav-logo" src={NavLogo} alt="home page link" />
      </Link>

      <label htmlFor="check" id="menuIcon">
        <input type="checkbox" id="check" onClick={toggleNav} />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div onClick={changePage} className="nav-links-container">
        <div className="close-menu-btn">
          <span class="chevron right"></span>
        </div>

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
