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
  margin: 5% auto 0 auto;

  h5 {
    color: var(--white-color);
    b {
      color: var(--light-purple);
    }
  }

  .flex-wrapper {
    border: 1px solid red;
    display: flex;
    justify-content: space-between;

    img {
      height: 445px;
      aspect-ratio: 1;
    }

    .planet-card-container {
      width: 50%;
      height: max-content;
      border: 1px solid red;
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
        <img src={currentPlanet.img} />

        <div className="planet-card-container">
          <InnerNavBar handlePlanetChange={handlePlanetChange} />
          <PlanetCard planetName={currentPlanet.name} />
        </div>
      </div>
    </StyledDestination>
  );
}
