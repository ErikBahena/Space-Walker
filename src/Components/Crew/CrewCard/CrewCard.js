import React from "react";
import styled from "styled-components";

import crewData from "./crewData";

const StyledCrewCard = styled.div`
  color: var(--white-color);

  * {
    margin: 0;
  }

  h3 {
    margin-bottom: 27px;
  }

  h4 {
    opacity: 0.5;
    margin-bottom: 1rem;
  }

  p {
    color: var(--light-purple);
    max-width: 444px;
    margin-bottom: 120px;
  }

  // This class changes the margin on the bottom because text wraps to 5 lines in the "victor" instance, so I needed to adjust that margin on the bottom accordingly.
  .bottomChange {
    margin-bottom: 88px;
  }
`;

export default function CrewCard({ currentCrewMember }) {
  return (
    <StyledCrewCard>
      <h4>{crewData[currentCrewMember].title}</h4>
      <h3>{crewData[currentCrewMember].name}</h3>
      <p className={currentCrewMember === "victor" ? "bottomChange" : ""}>
        {crewData[currentCrewMember].description}
      </p>
    </StyledCrewCard>
  );
}
