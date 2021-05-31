import React from "react";
const date = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <footer className="w-100 bg-light text-center">
        <p>© SaurabhTech {date}</p>
      </footer>
    </>
  );
};
export default Footer;
