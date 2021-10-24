import React from "react";
import { Link } from "react-router-dom";
// styles

import styled from "styled-components";

const StyledHomeView = styled.main`
  width: 77.063%;
  margin: 13% auto 0 auto;

  h5 {
    color: var(--light-purple);
    font-style: normal;
    font-weight: normal;
    line-height: 34px;
    letter-spacing: 4.725px;
  }

  article {
    width: 450px;
    margin-top: 2%;

    h1 {
      color: var(--white-color);
      font-style: normal;
      font-weight: normal;
      line-height: 172px;
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

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 250px;
      aspect-ratio: 1;
      margin-right: 5%;

      border-radius: 50%;
      border: none;

      background-color: var(--white-color);
      color: inherit;

      font-family: Bellefair;
      font-size: 32px;
      letter-spacing: 2px;

      transition: 0.4s ease-out;

      &:hover {
        // border: 30px solid rgba(255, 255, 255, 0.1);
        // -webkit-background-clip: padding-box; /* for Safari */
        // background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
        transform: scale(1.1);
      }
    }
  }
`;

export default function Home({ setCurrentPage }) {
  return (
    <StyledHomeView>
      <h5 className="no-marg-pad">SO, YOU WANT TO TRAVEL TO</h5>

      <div>
        <article>
          <h1 className="no-marg-pad">SPACE</h1>
          <p className="no-marg-pad">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>

        <Link
          onClick={() => {
            setCurrentPage("destination");
          }}
          to="/destination"
        >
          EXPLORE
        </Link>
      </div>
    </StyledHomeView>
  );
}
