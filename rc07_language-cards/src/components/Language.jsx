import { useState } from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";

// const Language = ({lang}) => {
const Language = ({ name, img, options }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-2 h-100 lang-card"
      onClick={() => setShowDesc(!showDesc)}
      type="button" // curser pointer için
    >
      {!showDesc && (
        <Container>
          <Image className="lang-logo" src={img} width="50%"></Image>
          <h3>{name}</h3>
        </Container>
      )}

      {showDesc && (
        <ol className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="h-5 text-start">{item}</li>;
          })}
        </ol>
      )}
    </Container>
  );
};

export default Language;
