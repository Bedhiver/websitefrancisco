import { Divider } from "@material-ui/core";
import React from "react";
import "./../styles/ProjectStyle.css";
import CardProject from "./CardProject";
import { imgArray } from "./../assets/assetsProject";

export default function Project() {
  return (
    <div className="divProject">
      <h1>Projets</h1>
      <Divider id="dividerProject" />
      <div className="divContainer">
        {imgArray.map((element, id) => (
          <CardProject
            key={id}
            imgSrc={element.img}
            title={element.title}
            content={element.content}
          />
        ))}
      </div>
    </div>
  );
}
