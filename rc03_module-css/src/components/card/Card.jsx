import Buton from "../buton/Buton";
// import "./Card.css";
import CardStyle from "./card.module.css";

const Card = ({ id, title, image, btnName }) => {
  return (
    <div>
      <h1 className={CardStyle.title}>{title}</h1>
      <img className={CardStyle["images"]} src={image} alt={title} />
      <Buton btn={btnName} />
    </div>
  );
};

export default Card;
