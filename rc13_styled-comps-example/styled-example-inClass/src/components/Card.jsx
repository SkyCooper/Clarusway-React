import React from 'react'
import StyledCard from './styles/Card.styled'
import { Image } from './styles/Header.styled'

const Card = ({id, title, body, image}) => {
  console.log(image)
  return (
    <StyledCard odd={id % 2 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <Image src={`./images/${image}`} />
      </div>
    </StyledCard>
  );
}

export default Card