import React from "react";
import { Divider } from "@material-ui/core";
import CardExperience from "./CardExperience";
import { imgArray } from "./../assets/assetsExperience";
import "./../styles/ExperienceStyle.css";

export default function Experience() {
  return (
    <div className="divExperience">
      <h1>Experiences professionnelles</h1>
      <Divider style={{ width: "100%" }} />
      <CardExperience imgSrc={imgArray[0].img} />
    </div>
  );
}
