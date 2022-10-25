import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
const style = {
  colors: {
    header: "#b8b2b2",
    body: "#eee",
    footer: "#8A1C4A",
  },
  margins: {},
  responsives: {
    breakpoint : "768px"
  },
};

//* ThemeProvider import et ve kullanılacak yerleri sarmala,
//* sonra theme probu ile yukarıda tanımlanan stilleri yolla,

const App = () => {
  return (
    <ThemeProvider theme={style}>
      {/* //* prop adı theme olmak zorunda */}
      <GlobalStyles/>
      <Header />
    </ThemeProvider>
  );
};

export default App;
