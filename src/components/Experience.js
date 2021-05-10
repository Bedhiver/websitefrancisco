import React from "react";
import { Divider, Grid } from "@material-ui/core";
import CardExperience from "./CardExperience";
import { degArray, expArray } from "./../assets/assetsExperience";
import "./../styles/ExperienceStyle.css";

export default function Experience() {
  return (
    <div className="divExperience">
      <div>
        <h1>Experiences professionnelles</h1>
        <Divider
          id="dividerExperience"
          // style={{ width: "100%" }}
        />
        <Grid container spacing={3} justify="center" id="gridExperience">
          {expArray.map((element) => (
            <Grid item key={element.title}>
              <CardExperience imgSrc={element} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <h1>Formations</h1>
        <Divider
          id="dividerExperience"
        />
        <Grid container spacing={3} justify="center" id="gridExperience">
          {degArray.map((element) => (
            <Grid item key={element.title}>
              <CardExperience imgSrc={element} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
