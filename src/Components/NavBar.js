import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import NavLogo from '../assets/shared/logo.svg';
import HamburgerIcon from '../assets/shared/icon-hamburger.svg';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 6%;
  padding-top: 2.5rem;

  height: max-content;
  width: 100%;

  .menuIcon {
    display: none;
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
    padding: 20px 5%;
    margin-bottom: 40px;

    .nav-logo {
      height: 30px;
      width: 30px;
    }

    .menuIcon {
      display: initial;
      transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    .nav-links-container {
      display: none;
    }

    .nav-links-container.display-mobile-nav {
      display: flex;
      flex-direction: column;

      height: 100vh;
      min-height: 550px;
      gap: 10%;

      position: fixed;
      z-index: 999;
      top: 0;
      right: 0;

      .close-menu-btn {
        display: flex;
        align-self: flex-start;
        margin-left: 2em;

        transform: scale(2);
        margin-left: 10px;

        .chevron::before {
          border-style: solid;
          border-color: white;
          border-width: 0.15em 0.15em 0 0;
          content: '';
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
        justify-content: flex-start;

        height: unset;
        width: 70%;

        margin-right: 0px !important;
      }
    }
  }
`;

export default function NavBar() {
  const [mobileNavActive, setMobileNavActive] = React.useState(false);
  const { location } = useHistory();

  const toggleNav = () => setMobileNavActive(!mobileNavActive);

  console.log(location.pathname);

  return (
    <StyledNav>
      <Link to='/home'>
        <img className='nav-logo' src={NavLogo} alt='home page link' />
      </Link>

      <img
        src={HamburgerIcon}
        alt='hamburger menu'
        className='menuIcon'
        onClick={toggleNav}
      />

      <div
        className={`nav-links-container ${
          mobileNavActive ? 'display-mobile-nav' : ''
        }`}
      >
        {mobileNavActive && (
          <div className='close-menu-btn' onClick={toggleNav}>
            <span className='chevron right'></span>
          </div>
        )}

        <Link
          to='/home'
          className={location.pathname === '/home' ? 'active-nav-link' : ''}
        >
          <p className='navText'>
            <b className='navBold'>00</b> Home
          </p>
        </Link>

        <Link
          to='/destination'
          className={
            location.pathname === '/destination' ? 'active-nav-link' : null
          }
        >
          <p className='navText'>
            <b className='navBold'>01</b> Destination
          </p>
        </Link>

        <Link
          to='/crew'
          className={location.pathname === '/crew' ? 'active-nav-link' : null}
        >
          <p className='navText'>
            <b className='navBold'>02</b> Crew
          </p>
        </Link>

        <Link
          to='/technology'
          className={
            location.pathname === '/technology' ? 'active-nav-link' : null
          }
        >
          <p className='navText'>
            <b className='navBold'>03</b> Technology
          </p>
        </Link>
      </div>
    </StyledNav>
  );
}
