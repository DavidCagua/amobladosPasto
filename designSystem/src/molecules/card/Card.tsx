import React from "react";
import Heading from "../../atoms/Heading/Heading";
import "./card.css";

export interface CardProps {
  src: string;
  title: string;
  location: string;
  price: number;
}

const Card = ({ title, src, price, location }: CardProps) => {
  return (
    <div className="card">
      <div className="card--img--container">
        <img className="card--img--container--img" src={src} alt="" />
      </div>
      <div className="card--info--container">
        <Heading weight="bold" size="lg">
          {title}
        </Heading>
        <Heading>{`$${price} COP / noche`}</Heading>
        <div className="card--footer--container">
          <Heading>4.9 (10 reseñas)</Heading>
          <Heading>{location}</Heading>
        </div>
      </div>
    </div>
  );
};

export default Card;
