import styled, {css} from 'styled-components';

//* esca kısayolu

const StyledLink = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: wheat;
  :hover {
    opacity: 0.5;
  }

  ${(props) =>
    props.secondary &&
    css`
      background: lightblue;
      color: crimson;
      padding: 0.5rem;
    `}
`;

export default StyledLink;
