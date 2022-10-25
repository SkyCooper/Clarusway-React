import styled from 'styled-components';

//*escb kısayolu
const Button = styled.button`
  background: ${({ bg }) => bg || "white"};
  color: ${({ color }) => color || "white"};
  border: 1px solid #a62440;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1.2rem;
  margin: 2rem 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    transform: scale(0.97);
  }
`;

export default Button;
