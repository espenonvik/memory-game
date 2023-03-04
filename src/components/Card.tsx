import React from "react";
import CardType from "../shared/interfaces/types";

interface Props extends CardType {
  onClick: () => void;
}

const Card = ({ image, selected, matched, onClick }: Props) => {
  const selectedClass = selected ? "selected" : "";
  const matchedClass = matched ? "matched" : "";

  return (
    <div className="card">
      <div className={`${matchedClass} ${selectedClass}`}>
        <img alt="Front of card" src={image} className="card-face" />
        <img
          alt="Back of card"
          src={"/assets/fireship.png"}
          className="card-back"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
