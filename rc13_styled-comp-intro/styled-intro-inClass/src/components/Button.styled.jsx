import styled from "styled-components";

//* emeğin yoğun olduğu, yani yazmanın çok olduğu bir yöntem styled-components
//* bir button componenti oluşturuldu, fakat styled içinden çağırıldı.

export const Button = styled.button`
  /* background-color: hotpink; */
  /* //? prop varsa ona göre rekler değişik olsun */
  background-color: ${(props) => (props.primary ? "white" : "purple")};

  /* color: white; */
  color: ${({ primary }) => (primary ? "purple" : "white")};
  /* //? destruct edip props'tan kurtulduk */

  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 1px solid purple;
  font-size: 1.2rem;
  width: 19rem;
  &:hover {
    transform: scale(0.95);
  }
`;
//* &:hover yerine dadece :hover yazılsa da çalışır.


//* alttaki kullanımda önceden oluşturulan butondan extend edilerek yeni buton oluşturuldu.
export const TomatoButton = styled(Button)`
  background-color: ${(props) => (props.primary ? "white" : "tomato")};
  color: ${({ primary }) => (primary ? "tomato" : "white")};
  border: 1px solid tomato;
`;
