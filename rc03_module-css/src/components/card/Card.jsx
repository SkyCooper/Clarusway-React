import Buton from "../buton/Buton";
import "./Card.css";

const Card = ({ id, title, image, btnName }) => {
  return (
    <div key={id}>
      <h1>{title}</h1>
      <img src={image} alt={title} width="100px" />
      <Buton btn={btnName} />
    </div>
  );
};

export default Card;
