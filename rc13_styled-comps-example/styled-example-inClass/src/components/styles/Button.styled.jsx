import styled from 'styled-components';

//*escb kısayolu
const Button = styled.button`
  background: ${({ bg }) => bg || "white"};
  color: ${({ color }) => color || "white"};
  border: 1px solid #a62440;
  box-shadow: 3px 5px 5px rgba(26, 25, 25, 0.551);
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1.2rem;
  margin: 2rem 0.5rem;
  margin-right: 0.5rem;
  opacity: 0.8;
  cursor: pointer;
  :hover {
    opacity: 1;
    transform: scale(0.97);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.027);
  }
`;

export default Button;
