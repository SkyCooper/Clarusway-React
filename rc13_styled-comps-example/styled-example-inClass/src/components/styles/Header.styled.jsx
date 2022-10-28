import styled from "styled-components";

//*esch kısayolu
const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 4rem 0;
`;

export const Logo = styled.img`
width: 300px;
padding: 2rem;
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsives.breakpoint}) {
    flex-direction: column;
  }
`;

export const Image = styled(Logo)`
  width: 380px;
  border-radius: 60px;
  @media (max-width: ${({ theme }) => theme.responsives.breakpoint}) {
    margin: 2rem 0;
  }
`;



export default StyledHeader;

//* default olan export en altta olması gerekli ve sadece 1 tane olur bir sayfada
