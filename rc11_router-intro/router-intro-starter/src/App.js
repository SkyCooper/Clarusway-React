import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Instructors />
      <Contact />
      <NotFound />
      <Footer />
    </>
  );
}

export default App;
