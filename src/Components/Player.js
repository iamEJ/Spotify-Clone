import React from "react";
import "./css/Player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        {/* body */}
      </div>
      <Footer />
    </div>
  );
}

export default Player;
