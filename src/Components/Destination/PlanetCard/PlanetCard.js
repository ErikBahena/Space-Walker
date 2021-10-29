import React from "react";
import styled from "styled-components";

// MockData
import planetsData from "./planetsData";

const StyledPlanetCard = styled.div`
  color: white;
`;

export default function PlanetCard({ planetName }) {
  return (
    <StyledPlanetCard>
      <h2> {planetsData[planetName].title} </h2>
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
