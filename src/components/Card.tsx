import React from "react";
import CardType from "../shared/interfaces/card";

interface Props extends CardType {
  onClick: () => void;
}

const Card = ({ image, selected, onClick }: Props) => {
  return (
    <div className="card">
      <div className={selected ? "selected" : ""}>
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
