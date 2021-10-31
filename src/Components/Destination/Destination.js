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
  width: 77.063%;
  margin: 0 auto;

  h5 {
    color: var(--white-color);
    margin: 76px 0;

    b {
      opacity: 0.5;
    }
  }

  .flex-wrapper {
    width: 100%;
    margin: 0 auto;
    display: flex;
    max-width: 1200px;
    justify-content: space-between;

    img {
      height: 445px;
      aspect-ratio: 1;
    }

    .planet-card-container {
      width: max-content;
      height: max-content;
      padding-left: 10%;
    }
  }

  @media (max-width: 1156px) {
    .flex-wrapper {
      flex-wrap: wrap;
      border: 1px solid red;
      margin-bottom: 100%;
      align-items: center;
      justify-content: center;

      .planet-card-container {
        padding: 0;
        text-align: center;

        nav {
          justify-content: center;
        }

        div:nth-of-type(1) div.vectors-container {
          justify-content: space-between;
          width: 90%;
          margin: 0 auto;

          div:nth-of-type(1) {
            margin-right: 0;
          }
        }

        div:nth-of-type(1) h2 > div > div > div {
          text-align: center;
          width: 100%;
          margin: 0 auto;
        }
      }
    }
  }

  @media (max-width: );
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

        <div className="planet-card-container">
          <InnerNavBar handlePlanetChange={handlePlanetChange} />
          <PlanetCard planetName={currentPlanet.name} />
        </div>
      </div>
    </StyledDestination>
  );
}
