import React from "react";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";

// const Language = ({lang}) => {
const Language = ({name, img, options}) => {
  return(
    <Container>
      <Container>
        <Image src={img} width="50%">

        </Image>
      </Container>
    
  </Container>

  ) 
};

export default Language;
