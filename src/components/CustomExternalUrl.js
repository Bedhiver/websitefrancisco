import { useTheme } from "@material-ui/core";
import React from "react";

export default function CustomExternalUrl({ link, isDecoration, isDownloadable }) {

  let foo = isDecoration ? "" : "none"

  return (
    <a
      style={{ color: useTheme().palette.text.primary, textDecoration: foo }}
      target="_blank"
      rel="noreferrer"
      href={link.url}
      download={isDownloadable}
    >
      {link.wordLinked}
    </a>
  );
}
