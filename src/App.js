import React, { useState } from "react";
import { Switch, Route } from "react-router";

// Style Imports
import styled from "styled-components";

// Components
import NavBar from "./Components/NavBar.js";
import Home from "./Components/Home/Home.js";
import Destination from "./Components/Destination/Destination.js";

// Background Images
import homeBackground from "./assets/home/background-home-desktop.jpg";
import destinationBackground from "./assets/destination/background-destination-desktop.jpg";
import crewBackground from "./assets/crew/background-crew-desktop.jpg";
import technologyBackground from "./assets/technology/background-technology-desktop.jpg";

const StyledApp = styled.div`
  .wrapper {
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: black;
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
`;

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <StyledApp>
      <div className={`wrapper ${currentPage + "Bg"}`}>
        <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <Switch>
          <Route path="/destination">
            <Destination />
          </Route>

          <Route path="/">
            <Home setCurrentPage={setCurrentPage} />
          </Route>
        </Switch>
      </div>
    </StyledApp>
  );
}
