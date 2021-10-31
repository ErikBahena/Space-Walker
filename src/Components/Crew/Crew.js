import React, { useState } from "react";
import styled from "styled-components";

import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";

import CrewCard from "./CrewCard/CrewCard.js";
import InnerSelector from "./InnerSelector.js";

const StyledCrew = styled.section`
  width: 77.063%;
  margin: auto auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

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
    min-height: 628.13px;
    position: relative;
    img {
      width: max-content;
      height: max-content;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

const images = {
  douglas,
  mark,
  victor,
  anousheh,
};

export default function Crew() {
  const [currentCrewMember, setCurrentCrewMember] = useState({
    name: "douglas",
    img: images.douglas,
  });

  const handleCrewChange = (newCrewMemberName) => {
    setCurrentCrewMember({
      img: images[`${newCrewMemberName}`],
      name: newCrewMemberName,
    });
  };

  return (
    <StyledCrew>
      <h5>
        <b>02</b> MEET YOUR CREW
      </h5>
      <div className="flex-wrapper">
        <div className="crew-member-container">
          <CrewCard currentCrewMember={currentCrewMember.name} />
          <InnerSelector
            handleCrewChange={handleCrewChange}
            currentCrewMember={currentCrewMember.name}
          />
        </div>

        <img
          src={currentCrewMember.img}
          alt={"crew member " + currentCrewMember.name}
        />
      </div>
    </StyledCrew>
  );
}
