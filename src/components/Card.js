import React from "react";

const Card = props => {
  const { cardTitle, cardText, cardImg, cardAction, cardLink } = props;
  return (
    <div className="card">
      <div className="card-title">{cardTitle}</div>
      <div className="card-body">
        <div className="card-text">{cardText}</div>
        <img className="card-img" src={cardImg} alt={""}></img>
      </div>
      <div className="card-footer">
        <a className="card-link" href={cardLink}>
          Link
        </a>
        <button className="card-button" onClick={cardAction}>
          Detail
        </button>
      </div>
    </div>
  );
};

export default Card;
