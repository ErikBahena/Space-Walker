import React, { useState, useEffect } from "react";
import styled from "styled-components";

import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";

import CrewCard from "./CrewCard/CrewCard.js";
import InnerSelector from "./InnerSelector.js";

const StyledCrew = styled.section`
  width: 85%;
  margin: 0 auto;
  max-width: 1300px;

  grid-area: 2 / 1 / 3 / 2;
  align-self: end;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h5 {
    color: var(--white-color);
    margin-top: auto;
    margin-bottom: auto;

    b {
      opacity: 0.5;
    }
  }

  .flex-wrapper {
    display: flex;
    justify-content: space-between;

    max-height: 501px;
    align-items: flex-end;

    .crew-member-container {
      height: max-content;
    }

    img {
      width: auto;
      height: 100%;
    }
  }

  // Tablet Responsiveness

  // @media (max-width: )
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

  useEffect(() => {
    const nav = document.querySelector("nav:nth-of-type(1)");

    nav.addEventListener("change", function (e) {
      console.log(e);
    });
  }, []);

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
        <div className="break"></div>

        <img
          src={currentCrewMember.img}
          alt={"crew member " + currentCrewMember.name}
        />
      </div>
    </StyledCrew>
  );
}
