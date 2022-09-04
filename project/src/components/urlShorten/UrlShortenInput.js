import React from 'react'

// components
import Card from "components/common/card/Card";
import Icons from "components/common/Icons";

const UrlShortenInput = () => {
  return (
    <Card
      className="w-[520px] h-[224px] bg-none"
      borderIcon={
        <Icons.CardBorderLg className="absolute top-0 right-0 left-0 bottom-0" />
      }
    >
      <div className="p-4 border-b-[1px] border-[#1B2935]">
        <h1 className="text-white font-bold text-lg">Shorten URL</h1>
      </div>
      <div className="relative w-[474px] h-[55px] mx-3 my-10">
        <Icons.InputBorder className="absolute top-0 right-0 left-0 bottom-0 z-0" />
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Type a URL to shorten..."
            className="w-full h-full rounded-full absolute z-10"
          />
          <button type="submit" className="shorten">
            Shorten
          </button>
        </form>
      </div>
    </Card>
  );
};

export default UrlShortenInput;
