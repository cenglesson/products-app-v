import React from "react";

import "./home.css";
import { InfoAlert } from "components/Alert/InfoAlert";

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <InfoAlert
        message="No time for making this page AWESOME!"
        description="Visit Products instead. The home page is still under construction. Stay tunned!"
      />
    </div>
  );
};
