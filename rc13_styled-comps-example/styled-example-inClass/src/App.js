import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import Container from "./components/styles/Container.styled";
import Footer from "./components/Footer";
import Card from "./components/Card";
import data from "./data";
const style = {
  colors: {
    header: "eee",
    body: "#eee",
    footer: "#8A1C4A",
  },
  margins: {},
  responsives: {
    breakpoint: "768px",
  },
};

//* ThemeProvider import et ve kullanılacak yerleri sarmala,
//* sonra theme probu ile yukarıda tanımlanan stilleri yolla,

const App = () => {
  return (
    <ThemeProvider theme={style}>
      {/* //* prop adı theme olmak zorunda */}
      <GlobalStyles />
      <Header />
      <Container>
        {data.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
