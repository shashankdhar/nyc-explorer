import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChoroplethMap from "./components/ChoroplethMap";
import ZipDetails from "./components/ZipDetails";

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={ChoroplethMap} />
        <Route path="/zip" component={ZipDetails} />
      </div>
    </Router>
  );
}

export default AppRouter;