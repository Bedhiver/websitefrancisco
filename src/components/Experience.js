import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
        <div id="AccordionExperience">
          {expArray.map((element, i) => (
            <Accordion
              defaultExpanded={element.id === 1 ? true : false}
              key={i}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{element.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CardExperience imgSrc={element} />
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
        {/* <Grid container spacing={3} justify="center" id="gridExperience">
          {expArray.map((element) => (
            <Grid item key={element.title}>
              <CardExperience imgSrc={element} />
            </Grid>
          ))}
        </Grid> */}
      </div>
      <div>
        <h1>Formations</h1>
        <Divider id="dividerExperience" />
        <div id="AccordionExperience">
          {degArray.map((element, i) => (
            <Accordion
              defaultExpanded={element.id === 1 ? true : false}
              key={i}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{element.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <CardExperience imgSrc={element} />
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
