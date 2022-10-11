import Buton from "../buton/Buton";
// import "./Card.css";
import CardStyle from "./card.module.css";

//* module.css'de derleyici CSS class'larini alarak bunlari unique olacak
//* sekilde yeniden adlandirir. (Ornek: card_title__XaSde)
//* Bu durumda, global scope problemi ortadan kalktigi icin stillerin
//* baska class tarafindan ezilmesi (overriding) engellenir.
//* CCS module Webpack, Browsify gibi tool'lar ile kullanilabilir.

const Card = ({ id, title, image, btnName }) => {
  // const { language, btn, img } = props;  //!destr. yapılabilir altta, veya yukarıda yolda
  return (
    <div>
      <h1 className={CardStyle.title}>{title}</h1>
      <img className={CardStyle["images"]} src={image} alt={title} />
      <Buton btn={btnName} />
    </div>
  );
};

export default Card;
