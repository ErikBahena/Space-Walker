import React, { useState } from "react";

// Styling
import styled from "styled-components";

// Images
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";

// components
import InnerNavBar from "./InnerNavBar";
import PlanetCard from "./PlanetCard/PlanetCard.js";

const StyledDestination = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 1200px;

  h5 {
    color: var(--white-color);
    margin: 76px 0;

    b {
      opacity: 0.5;
    }
  }

  .flex-wrapper {
    display: flex;
    justify-content: space-between;

    .planet-card-container {
      margin-right: 5%;
      @media (max-width: 1156px) {
        margin-right: 0;
      }
    }

    img {
      height: 445px;
      margin: auto 0;
      @media (max-width: 1250px) {
        height: 350px;
      }
    }
  }

  // tablet responsiveness
  @media (max-width: 1020px) {
    h5 {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
      margin-bottom: 0;
      text-align: center;
    }

    .flex-wrapper {
      flex-wrap: wrap;
      justify-content: center;

      img {
        margin-top: 7.5%;
        margin-bottom: 6.5%;
        height: 300px;
      }

      .break {
        flex-basis: 100%;
      }

      .planet-card-container {
        padding: 0;
        text-align: center;

        nav {
          justify-content: center;
        }

        hr {
          max-width: 100%;
          margin-top: 49px;
          margin-bottom: 28px;
        }

        div:nth-of-type(1) p {
          max-width: 573px;
          font-size: 16px;
          line-height: 28px;
          margin: 0;
        }

        div > div > p.subh2 {
          margin-top: 0;
        }

        div:nth-of-type(1) div.vectors-container {
          justify-content: space-between;
          width: 70%;
          margin: 0 auto;

          div:nth-of-type(1) {
            margin-right: 0;
          }
        }

        div:nth-of-type(1) h2 > div > div > div {
          width: 100%;
          margin: 0 auto;
          font-size: 80px;
          line-height: 92px;
          height: max-content;
        }
      }
    }
  }

  // Mobile Responsiveness
  @media (max-width: 425px) {
    .flex-wrapper {
      img {
        height: 170px;
      }

      .planet-card-container {
      }
    }
  }
`;

const images = {
  moon,
  mars,
  europa,
  titan,
};

export default function Destination() {
  const [currentPlanet, setCurrentPlanet] = useState({
    name: "moon",
    img: images.moon,
  });

  const handlePlanetChange = (planetName) => {
    setCurrentPlanet({ img: images[`${planetName}`], name: planetName });
  };

  return (
    <StyledDestination>
      <h5>
        <b>01</b> PICK YOUR DESTINATION
      </h5>

      <div className="flex-wrapper">
        <img src={currentPlanet.img} alt={"the planet " + currentPlanet.name} />

        <div className="break"></div>

        <div className="planet-card-container">
          <InnerNavBar handlePlanetChange={handlePlanetChange} />
          <PlanetCard planetName={currentPlanet.name} />
        </div>
      </div>
    </StyledDestination>
  );
}
