import React from "react";
import "./../styles/PongStyle.css";

export default function Pong() {
  return (
    <div>
      <div id="iframe-div">
        <h1>
          Le jeu est uniquement jouable sur pc avec les touches du clavier
        </h1>
      </div>
      <div>
        <iframe
          id="iframe-pong"
          title="pongframe"
          src="https://ping-pong-phi.vercel.app/"
        />
      </div>
    </div>
  );
}
