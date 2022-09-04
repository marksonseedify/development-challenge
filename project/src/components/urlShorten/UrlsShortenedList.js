import Icons from "components/common/Icons";
import React from "react";

// components
import UrlShortenedItem from "./UrlShortenedItem";

const UrlsShortenedList = ({ urls }) => {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-2xl text-white">URLs Shortened</h1>
      <div className="mt-5">
        {urls?.map((url) => (
          <UrlShortenedItem key={url.id} {...url} />
        ))}
        <div className="relative text-center mx-auto flex items-center justify-center gap-4 mt-16 mb-80">
          <Icons.LeftMore />
          <span className="text-[#7BF5FB] text-lg font-bold cursor-pointer">
            Show More
          </span>
          <Icons.RightMore />
        </div>
      </div>
    </div>
  );
};

export default UrlsShortenedList;
