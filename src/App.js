import React, { useState } from "react";
import { Switch, Route } from "react-router";

// Style Imports
import styled from "styled-components";

// Components
import NavBar from "./Components/NavBar";
import Home from "./Components/Home/Home.js";

const StyledApp = styled.div`
  height: 100vh;
  border: 5px solid red;
`;

export default function () {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <StyledApp className={currentPage + "Bg"}>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </StyledApp>
  );
}
