import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Layout</h1>

      <div dangerouslySetInnerHTML={{ __html: children }}></div>
    </div>
  );
};

export default Layout;
