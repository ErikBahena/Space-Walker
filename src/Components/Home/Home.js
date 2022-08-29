import React from 'react';
import { Link } from 'react-router-dom';
// styles

import styled from 'styled-components';

const StyledHomeView = styled.main`
  width: 77.063%;
  margin: 13vh auto 0 auto;

  max-width: 1200px;

  h5 {
    color: var(--light-purple);
  }

  article {
    width: 450px;
    margin-top: 2%;

    h1 {
      color: var(--white-color);
      margin-bottom: 5%;
    }

    p {
      color: var(--light-purple);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 250px;
      width: 250px;
      margin-left: 80px;

      border-radius: 50%;
      border: none;

      background-color: var(--white-color);
      color: inherit;

      font-family: Bellefair;
      font-size: 32px;
      letter-spacing: 2px;

      transition: 0.4s ease-out;

      &:hover {
        box-shadow: 0px 0 0px 50px rgba(255, 255, 255, 0.29);
      }
    }
  }

  // Tablet Responsiveness
  @media (max-width: 1013px) {
    div {
      justify-content: center;

      .break {
        flex-basis: 100%;
        height: 0;
      }

      p {
        text-align: center;
        flex: 0 0 100%;
      }
      a {
        margin: 10% 2rem 0 2rem;
      }
    }

    h5 {
      text-align: center;
    }
  }

  // Mobile Responsiveness
  @media (max-width: 600px) {
    margin-top: 3%;

    h5 {
      font-size: 16px;
    }

    div {
      article {
        h1 {
          font-size: 80px;
          line-height: 100px;
          text-align: center;
        }

        p {
          font-size: 15px;
          line-height: 25px;
        }
      }

      a {
        height: 150px;
        width: 150px;
        margin-left: 0;
        margin-right: 0;
        font-size: 20px;
        line-height: 23px;
      }
    }
  }
`;

export default function Home() {
  return (
    <StyledHomeView>
      <h5 className='no-marg-pad'>SO, YOU WANT TO TRAVEL TO</h5>

      <div>
        <article>
          <h1 className='no-marg-pad'>SPACE</h1>
          <p className='no-marg-pad'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>

        <div className='break'></div>

        <Link to='/destination'>EXPLORE</Link>
      </div>
    </StyledHomeView>
  );
}
