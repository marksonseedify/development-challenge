import React from "react";
import "./style.scss";

const Card = ({widthCard, heightCard, children}) => {
    return (
        <div className="card-content" style={{width: widthCard, height: heightCard}}>
            {children}
        </div>
    );
};

export default Card;
