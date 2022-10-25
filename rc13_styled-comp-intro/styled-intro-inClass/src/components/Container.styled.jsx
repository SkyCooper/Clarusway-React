import styled from "styled-components";

//* escd yazdı, otomatik div üretti.

const Container = styled.div`
  background: ${({ bg }) => bg || "yellow"};
  /* background-color: ${({ bg }) => (bg ? bg : "white")}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;

`;

export default Container;
