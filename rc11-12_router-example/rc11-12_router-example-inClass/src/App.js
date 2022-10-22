import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <People />
      <Contact />
      <NotFound />
      <Footer />
    </>
  );
}

export default App;
