import React from "react";

const Footer = ({ copy }) => {
  return (
    <footer className=" bg-black text-white p-4">
      <p>{copy}</p>
    </footer>
  );
};

export default Footer;
