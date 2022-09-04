import React from "react";

// components
import Icons from "../Icons";
import Layout from "../Layout";

// styles
import "./_footer.scss";

// images
import FooterLogo from 'assets/images/logo-2.svg'

// APP ROUTES
const NAV_LINKS = ["Seedify Home Page", "Our Blog", "About Us", "Contact Us"];

const Footer = () => {
  return (
    <footer className="shrink-0">
      <Layout>
        <div className="flex items-center h-80">
          <div className="flex items-start justify-between flex-1">
            <div>
              <img src={FooterLogo} alt="Seedify.fund" />
              <p className="text-white opacity-50 text-sm	font-normal	max-w-[19rem] mt-6">
                Seedify.fund is a Blockchain Gaming focused Incubator and
                Launchpad. Through staking $SFUND, become eligible to buy game
                tokens before everyone else, and have an edge in the play to earn
                era!
              </p>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold">Company</h2>
              <nav className="flex items-center justify-between flex-wrap max-w-xs">
                {NAV_LINKS.map((navItem) => (
                  <span
                    key={navItem}
                    className="text-white text-sm	font-normal w-32 mt-4"
                  >
                    {navItem}
                  </span>
                ))}
              </nav>
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold">Never Miss Updates.</h2>
              <div className="relative mt-4">
                <input type="email" placeholder="Enter your mail address" />
                <button type="button" className="send-button">
                  <Icons.Send />
                </button>
                <p className="text-white text-lg font-semibold mt-3">Follow us on</p>
                <nav className="flex items-center justify-between mt-3">
                  <Icons.FacebookRounded />
                  <Icons.DiscordRounded />
                  <Icons.TelegramRounded />
                  <Icons.TelegramRounded />
                  <Icons.TelegramRounded />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
