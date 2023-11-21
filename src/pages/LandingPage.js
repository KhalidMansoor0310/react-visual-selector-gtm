import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InteractionSelector from "../components/InteractiveSelector";

function LandingPage() {
  return (
    <div className="container">
      <h1 className="mt-3 mb-4">Visual Interaction Selector</h1>
      <div className="row">
        <div className="col-md-8">
          <InteractionSelector />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
