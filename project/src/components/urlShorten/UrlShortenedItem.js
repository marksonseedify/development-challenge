import React from "react";

// components
import Card from "components/common/card/Card";
import Icons from "components/common/Icons";

const UrlShortenedItem = ({ shortenedUrL, fullUrl }) => {
  return (
    <Card
      className="relative flex items-center justify-between h-28 w-[1150px] m-auto bg-none text-white px-5 mt-5"
      borderIcon={
        <Icons.UrlCardBorder className="absolute top-0 left-0 right-0 bottom-0 h-full w-full" />
      }
    >
      <span>{shortenedUrL}</span>
      <span className="flex gap-3">
        <Icons.Link />
        Full Link: {fullUrl}
      </span>
      <div className="flex items-center gap-4">
        <button className="shorten relative">Copy</button>
        <Icons.Options className="mt-3 cursor-pointer" />
      </div>
    </Card>
  );
};

export default UrlShortenedItem;
