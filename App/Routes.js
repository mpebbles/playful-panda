import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./pages/Home.js";
import PlaceHolder from "./pages/PlaceHolder.js";
import Download from "./pages/Download.js";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="placeHolder" component={PlaceHolder} title="PlaceHolder" />
      <Scene key="downloads" component={Download} title="Downloads" />
    </Scene>
  </Router>
);
export default Routes;
