import { useTheme } from "@material-ui/core";
import React from "react";

export default function Contact() {
  return (
    <div
      style={{
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <pre>
          <h1>/!\ Page en construction /!\</h1>
        </pre>
      </div>
      <div
        style={{
          border: `solid 2px ${useTheme().palette.secondary.dark}`,
          paddingRight: "20px",
        }}
      >
        <ul>
          <li>Francisco FERNANDEZ</li>
          <li>francisco59553@gmail.com</li>
          <li>06.58.70.43.27</li>
          <br />
          <li>https://www.linkedin.com/in/francisco-fernandez-57990a104/</li>
        </ul>
      </div>
    </div>
  );
}
