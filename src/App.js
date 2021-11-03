import React, { useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";

// Style Imports
import styled from "styled-components";

// Components
import NavBar from "./Components/NavBar.js";
import Home from "./Components/Home/Home.js";
import Destination from "./Components/Destination/Destination.js";
import Crew from "./Components/Crew/Crew.js";

// Background Images
import homeBackground from "./assets/home/background-home-desktop.jpg";
import homeBackgroundTablet from "./assets/home/background-home-tablet.jpg";
import homeBackgroundMobile from "./assets/home/background-home-mobile.jpg";

import destinationBackground from "./assets/destination/background-destination-desktop.jpg";
import destinationBackgroundTablet from "./assets/destination/background-destination-tablet.jpg";
import crewBackground from "./assets/crew/background-crew-desktop.jpg";
import technologyBackground from "./assets/technology/background-technology-desktop.jpg";

// Hooks
import useLocalStorage from "./hooks/useLocalStorage.js";

const StyledApp = styled.div`
  .wrapper {
    height: 100%;
    min-height: 100vh;

    padding-bottom: 5%;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: black;

    -webkit-transition: background-image 0.2s ease-in-out;
    transition: background-image 0.2s ease-in-out;
  }

  .homeBg {
    background-image: url(${homeBackground});
  }
  .destinationBg {
    background-image: url(${destinationBackground});
  }
  .crewBg {
    background-image: url(${crewBackground});
  }
  .technologyBg {
    background-image: url(${technologyBackground});
  }

  // home responsiveness

  @media (max-width: 1013px) {
    .homeBg {
      background-image: url(${homeBackgroundTablet});
    }
  }
  @media (max-width: 425px) {
    .homeBg {
      background-image: url(${homeBackgroundMobile});
    }
  }

  // destination responsiveness

  @media (max-width: 1156px) {
    .destinationBg {
      background-image: url(${destinationBackgroundTablet});
    }
  }
`;

export default function App() {
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage", "home");

  const { push } = useHistory();

  useEffect(() => {
    push(`/${currentPage}`);
  }, []);

  return (
    <StyledApp>
      <div className={`wrapper ${currentPage + "Bg"}`}>
        <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <Switch>
          <Route path="/crew">
            <Crew />
          </Route>

          <Route path="/destination">
            <Destination />
          </Route>

          <Route path="/home">
            <Home setCurrentPage={setCurrentPage} />
          </Route>

          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </StyledApp>
  );
}
