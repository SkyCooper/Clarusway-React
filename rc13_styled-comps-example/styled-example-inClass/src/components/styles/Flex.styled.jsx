import styled from 'styled-components';


//*escd kısayolu
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: ${({ theme }) => theme.responsives.breakpoint}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Flex;
