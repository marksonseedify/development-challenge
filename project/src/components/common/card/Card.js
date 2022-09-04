import React from "react";
import classNames from "classnames";

// components
import Icons from "../Icons";

// styles
import "./_card.scss";

const Card = ({
  className = "",
  children,
  borderIcon = (
    <Icons.CardBorder className="absolute top-0 right-0 left-0 bottom-0" />
  ),
}) => {
  return (
    <div className={classNames("card rounded-md", className)}>
      {borderIcon}
      {children}
    </div>
  );
};

export default Card;
