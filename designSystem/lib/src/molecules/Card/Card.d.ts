/// <reference types="react" />
import "./card.css";
export interface CardProps {
    src: string;
    title: string;
    location: string;
    price: number;
}
declare const Card: ({ title, src, price, location }: CardProps) => JSX.Element;
export default Card;
