import React, { useState, useEffect } from "react";
import styled from "styled-components";

// MockData
import planetsData from "./planetsData";

// Text Change Transition Library
import TextTransition, { presets } from "react-text-transition";

const StyledPlanetCard = styled.div`
  color: var(--white-color);
  transition: all 0.5s linear;

  h2 {
    margin-top: 37px;
    margin-bottom: 14px;
  }

  p:nth-of-type(1) {
    max-width: 444px;
    color: var(--light-purple);
  }

  hr {
    width: 100%;
    border-color: var(--light-purple);
    max-width: 444px;
  }

  .vectors-container {
    display: flex;

    div:nth-of-type(1) {
      margin-right: 79px;
    }
  }
`;

export default function PlanetCard({ planetName }) {
  const [data, setData] = useState({
    title: planetsData[planetName].title,
  });

  useEffect(() => {
    console.log("im initial");
    setData({
      title: planetsData[planetName].title,
    });
  }, [planetName]);

  return (
    <StyledPlanetCard>
      <h2>
        <TextTransition
          text={data.title}
          springConfig={presets.slow}
          noOverflow={true}
          direction="down"
        />
      </h2>
      <p>{planetsData[planetName].description}</p>

      <hr></hr>

      <div className="vectors-container">
        <div>
          <p className="subh2">Avg. Distance</p>
          <p className="subh1">{planetsData[planetName].averageDistance}</p>
        </div>

        <div>
          <p className="subh2">Est. Travel Time</p>
          <p className="subh1">{planetsData[planetName].estimatedTravelTime}</p>
        </div>
      </div>
    </StyledPlanetCard>
  );
}
