import React from "react";
import "./css/Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        {/* body */}
      </div>
      {/* footer */}
    </div>
  );
}

export default Player;
