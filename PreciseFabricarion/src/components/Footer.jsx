import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 text-center">
      &copy; {new Date().getFullYear()} My Website. All Rights Reserved.
    </footer>
  );
};

export default Footer;
