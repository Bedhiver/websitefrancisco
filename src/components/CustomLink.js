import { Link } from "react-router-dom";
import customLinkStyle from "../styles/CustomLinkStyle";
import React from "react";

/**
 * CustomLink with custom style already applied
 *
 * Render a custom link component with 2 attributes :
 *  
 * `{ props.to, props.content }`
 * @param {object} props
 * @param {string} props.to - path to url
 * @param {string} props.content - content in string or jsx
 */
export default function CustomLink({to, content}) {
  return (
    <Link to={to} style={customLinkStyle.linkStyle}>
      {content}
    </Link>
  );
}
