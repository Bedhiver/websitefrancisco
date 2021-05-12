import { useTheme } from "@material-ui/core";
import React from "react";

export default function CustomExternalUrl({ wordLinked, url }) {
  return (
    <a
      style={{ color: useTheme().palette.text.primary }}
      target="_blank"
      rel="noreferrer"
      href={url}
    >
      {wordLinked}
    </a>
  );
}
