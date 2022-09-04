import React from "react";

// styles
import "./_percentage-circle.scss";

const PercentageCircle = ({ percentage = "75%" }) => {
  return (
    <div className="circle-wrap">
      <div className="inside-circle">{percentage}</div>
    </div>
  );
};

export default PercentageCircle;
