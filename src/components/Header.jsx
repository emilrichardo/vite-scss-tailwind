import React from "react";

const Header = ({ title }) => {
  return (
    <>
      <header>
        <div className="container bg-white p-8">
          <h1>{title}</h1>
        </div>
      </header>
    </>
  );
};
export default Header;
