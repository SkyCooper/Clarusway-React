import { Button, TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/HeaderText.styled";
import StyledLink from "./components/Link.styled";

const App = () => {
  return (
    <>
      <Container bg="grey">
        <HeaderText color="white">STYLED COMPONENTS </HeaderText>
        <Button primary>Click Styled Button</Button>
        {/* primary = {primary} aslında prop olarak yolladı ama ismi aynı olduğu için tekli yazılması daha uygun  */}
        <Button>Save Styled Button</Button>
        <TomatoButton>Clear Tomato Button</TomatoButton>
        <TomatoButton primary>Submit Tomato Button</TomatoButton>
      </Container>
      <Container bg="#b18ab1">
        <StyledLink
          href="https://styled-components.com/docs/basics#motivation"
          target="_blank"
        >
          Styled Components
        </StyledLink>
        <StyledLink
          secondary
          href="https://react-icons.github.io/react-icons/"
          target="_blank"
        >
          React Icons
        </StyledLink>
      </Container>
    </>
  );
};

export default App;
