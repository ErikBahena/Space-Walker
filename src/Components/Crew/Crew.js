import React, { useState, useEffect } from "react";
import styled from "styled-components";

import douglas from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";
import anousheh from "../../assets/crew/image-anousheh-ansari.png";

import CrewCard from "./CrewCard/CrewCard.js";
import InnerSelector from "./InnerSelector.js";
let navHeightVal;

const StyledCrew = styled.section`
  width: 85%;
  margin: 0 auto;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 136px);

  h5 {
    color: var(--white-color);
    margin: 5.8% 0 5% 0;

    b {
      opacity: 0.5;
    }
  }

  .flex-wrapper {
    width: 100%;
    margin-top: auto;
    align-self: flex-end;
    display: flex;
    justify-content: space-between;
    min-height: 700px;

    img {
      width: auto;
      max-height: 100%;
      position: relative;
      bottom: 0;
      right: 0;
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
