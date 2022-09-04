import React from "react";

// components
import Card from "components/common/card/Card";
import Layout from "components/common/Layout";

// styles
import "./_header.scss";

const Header = () => {
  return (
    <div className="header h-80">
      <Layout>
        <Card className="inline-block p-5 w-[301px] h-[84px] mt-20">
          <h1 className="text-white text-xs opacity-70 font-semibold">
            Welcome
          </h1>
          <p className="text-white text-xl font-bold mt-2">
            To Our URL Shortener
          </p>
        </Card>
      </Layout>
    </div>
  );
};

export default Header;
