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
  margin: 5% auto 0 auto;

  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  h5 {
    color: var(--white-color);
    margin: 0 0 154px 0;

    b {
      opacity: 0.5;
    }
  }

  .flex-wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    min-height: 628.13px;

    img {
      position: absolute;
      bottom: 0;
      right: 0;
      height: max-content;
      width: max-content;
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
