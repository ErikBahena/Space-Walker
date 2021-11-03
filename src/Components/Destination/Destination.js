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
  max-width: 1300px;

  h5 {
    color: var(--white-color);
    margin: 5.8% 0 5% 0;

    b {
      opacity: 0.5;
    }
  }

  .flex-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .planet-card-container {
      margin-right: 5%;
      @media (max-width: 1156px) {
        margin-right: 0;
      }

      hr {
        width: 100%;
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

  // Laptop Responsiveness
  @media (max-width: 1440px) {
    h5 {
      margin: 3% 0 2.5% 0;
    }
  }

  // tablet responsiveness
  @media (max-width: 1020px) {
    h5 {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 3.375px;
      margin-bottom: 0;
      margin-top: 6%;
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
          width: max-content;
          margin-bottom: 6%;
        }

        hr {
          margin-top: 49px;
          margin-bottom: 28px;
        }

        // description paragraph
        div:nth-of-type(1) .p-description {
          max-width: 573px;
          font-size: 16px;
          line-height: 28px;
          margin: 0;
        }

        div > div > p.subh2 {
          margin: 0;
          white-space: nowrap;
        }

        div > div > p.subh1 {
          white-space: nowrap;
          margin-bottom: 0;
          margin-top: 12px;
        }

        div:nth-of-type(1) div.vectors-container {
          justify-content: space-between;
          width: 70%;
          margin: 0 auto;

          @media (max-width: 485px) {
            flex-wrap: wrap;
            justify-content: center;
            padding-bottom: 3%;

            .break {
              flex-basis: 100%;
            }

            div:nth-of-type(1) {
              margin-bottom: 17%;
            }
          }

          div:nth-of-type(1) {
            margin-right: 0;
          }
        }

        div:nth-of-type(1) h2 {
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
    width: 100%;
    // Pick your Destination SubTitle
    h5 {
      text-align: center;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    }

    .flex-wrapper {
      // Moon Image
      img {
        height: 170px;
      }

      .planet-card-container {
        // Moon Title
        div:nth-of-type(1) h2 {
          font-size: 56px;
          line-height: 64px;
          margin-top: 20px;
        }

        // description paragraph
        div:nth-of-type(1) .p-description {
          font-size: 15px;
          width: 88%;
          margin: 0 auto;
          line-height: 25px;
        }

        hr {
          width: 80%;
          margin: initial auto;
        }
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
