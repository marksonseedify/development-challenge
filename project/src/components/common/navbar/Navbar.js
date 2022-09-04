import React from "react";

// components
import Icons from "../Icons";
import Layout from "../Layout";

// images
import Logo from "assets/images/logo.svg";
import Earth from "assets/images/earth.svg";

// styles
import "./_navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Layout>
        <div className="flex items-center justify-between h-28">
          <img src={Logo} alt="Seedify" />
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center mx-5 text-white">
              <img src={Earth} alt="Language" className="mx-2" />
              <span>En</span>
              <Icons.Arrow className="mx-1 cursor-pointer" />
            </div>
            <Icons.Twitter />
            <Icons.Telegram />
            <Icons.Medium />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Navbar;
