import React from "react";

// components
import Footer from "./common/footer/Footer";
import Navbar from "./common/navbar/Navbar";
import Header from "./header/Header";
import UrlShortenLayout from "./urlShorten/UrlShortenLayout";

const App = () => {
  return (
    <div className="app relative">
      <Navbar />
      <Header />
      <UrlShortenLayout />
      <Footer />
    </div>
  );
};

export default App;
