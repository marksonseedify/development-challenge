import React from "react";

import Icons from "components/common/Icons";
import Card from "../common/card/Card";
import PercentageCircle from "../common/percentageCircle/PercentageCircle";

const UrlShortenInsights = () => {
  return (
    <React.Fragment>
      <Card
        className="w-[380px] h-[224px] bg-none"
        borderIcon={
          <Icons.CardBorderMd className="absolute top-0 right-0 left-0 bottom-0" />
        }
      >
        <div className="flex items-center justify-start gap-5 p-4 border-b-[1px] border-[#1B2935]">
          <h1 className="text-white font-bold text-lg">URLs Shortened</h1>
          <Icons.Info />
        </div>
        <div className="flex items-center justify-around mt-5">
          <PercentageCircle percentage="75%" />
          <span className="text-[56px] font-bold text-white">7/10</span>
        </div>
      </Card>
      <div className="flex items-center flex-col gap-6">
        <Card
          className="w-[212px] h-[98.16px] bg-none p-4"
          borderIcon={
            <Icons.CardBorderSm className="absolute top-0 right-0 left-0 bottom-0" />
          }
        >
          <p className="text-white font-bold text-xl max-w-[150px]">
            This is a mock app for an exercise
          </p>
        </Card>
        <Card
          className="w-[212px] h-[98.16px] bg-none p-4"
          borderIcon={
            <Icons.CardBorderSm className="absolute top-0 right-0 left-0 bottom-0" />
          }
        >
          <p className="text-white font-bold text-xl max-w-[150px]">
            This is a mock app for an exercise
          </p>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default UrlShortenInsights;
