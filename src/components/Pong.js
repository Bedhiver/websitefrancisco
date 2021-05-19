import React from "react";
import "./../styles/PongStyle.css";

export default function Pong() {
  return (
    <div id="divMain">
      <div id="iframe-div">
        <h1>
          Le jeu est uniquement jouable sur pc avec les touches du clavier
        </h1>
      </div>
      <div id="div-controls-and-iframe">
        <h2>Controles clavier :</h2>
        <p>Joueur 1 : Z et S</p>
        <p>
          Joueur 2 : <span class="spanPong">&#8593;</span>
          et <span class="spanPong">&#8595;</span>
        </p>
        <iframe
          id="iframe-pong"
          title="pongframe"
          src="https://ping-pong-phi.vercel.app/"
        />
      </div>
    </div>
  );
}
