import React from "react";

const Header = ({ children, title }) => {
  return (
    <>
      <header>
        <div className="container bg-white p-8">
          <h1>{title}</h1>
        </div>
        <div className="slot">{children}</div>
      </header>
    </>
  );
};
export default Header;
