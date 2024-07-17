import React from "react";

const MyComponent = ({ children, title, description }) => {
  return (
    <div className="my-component bg-green-300 p-8  m-2">
      <h1 className=" text-2xl">{title}</h1>
      <p className=" text-lg">{description}</p>
      <div>{children}</div>
    </div>
  );
};

export default MyComponent;
