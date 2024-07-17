import React from "react";

const Footer = ({ children, copy }) => {
  return (
    <footer>
      <p>{copy}</p>
      <div dangerouslySetInnerHTML={{ __html: children }}></div>
    </footer>
  );
};

export default Footer;
