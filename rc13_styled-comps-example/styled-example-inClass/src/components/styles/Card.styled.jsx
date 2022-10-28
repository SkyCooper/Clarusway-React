import styled from "styled-components";

//*escd kısayolu
const StyledCard = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  gap: 2rem;
  margin: 2rem auto;
  border-radius: 20px;
  padding: 1rem;
  flex-direction: ${({ odd }) => odd || "row"};

  @media (max-width: ${({ theme }) => theme.responsives.breakpoint}) {
    flex-direction: column;
  }
`;
export default StyledCard;
