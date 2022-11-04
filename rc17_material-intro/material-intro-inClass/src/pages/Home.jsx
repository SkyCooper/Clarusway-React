import AppbarComp from "../components/AppbarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme, ThemeProvider } from "@mui/material/";
import MakeStylesComp from "../components/MakeStylesComp";
import { teal } from "@mui/material/colors";



const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#294ea3",
        light: "#8ebcec",
        dark: "#0a1250",
      },
      secondary: {
        main: teal[500],
      },
      // yukarıdaki gibi atama yapınca mui light/dark tonları kendisi otomatik ayarlıyor
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppbarComp />
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
      <MakeStylesComp />
    </ThemeProvider>
  );
};

export default Home;
