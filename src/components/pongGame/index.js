import React from "react";
import phaser from './phaser';
import pongGame from './pongGame';

export default function Pong() {
  return (
    <div>
      hello
      <script src={phaser}></script>
      <script src={pongGame}></script>
    </div>
  );
}
