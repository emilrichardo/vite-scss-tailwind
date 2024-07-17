import React from "react";

const Header = ({ children, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: children }}></div>
    </div>
  );
};
export default Header;
