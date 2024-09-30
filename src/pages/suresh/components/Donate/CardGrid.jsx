import React from "react";
import card1 from "../Donate/Donateimage/card1.png";
import card2 from "../Donate/Donateimage/card2.png";
import card3 from "../Donate/Donateimage/card3.png";
import card4 from "../Donate/Donateimage/card4.png";
import card5 from "../Donate/Donateimage/card5.png";
import card6 from "../Donate/Donateimage/card6.png";
import card7 from "../Donate/Donateimage/card7.png";
import card8 from "../Donate/Donateimage/card8.png";

import "./Card.css";
import Card from "./Card";

const cardData = [
  { id: "1", imageUrl: card1 },
  { id: "2", imageUrl: card2 },
  { id: "3", imageUrl: card3 },
  { id: "5", imageUrl: card4 },
  { id: "6", imageUrl: card5 },
  { id: "4", imageUrl: card6 },
  { id: "7", imageUrl: card7 },
  { id: "8", imageUrl: card8 },
];
const CardGrid = () => {
  return (
    <div className="card-grid">
      {cardData.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default CardGrid;
