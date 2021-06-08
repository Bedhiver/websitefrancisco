import { useTheme } from "@material-ui/core";
import React from "react";

export default function CustomExternalUrl({ link, isDecoration, isNotNewTab }) {
  let decorated = isDecoration ? "" : "none";
  let newTab = isNotNewTab ? "" : "_blank";

  return (
    <a
      style={{
        color: useTheme().palette.text.primary,
        textDecoration: decorated,
      }}
      target={newTab}
      rel="noreferrer"
      href={link.url}
    >
      {link.wordLinked}
    </a>
  );
}
