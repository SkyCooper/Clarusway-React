import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import Paths from "./pages/Paths"
import { Routes, Route, Link, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";

//? Link, NavLink ve Navigate componentleri declerative routing
//? gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapilan bir
//? componentlerdir. (Nav v.b)

//? Navigate componenti sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirilmesi icin kullanilabilir. (v5 -> Redirect)
//? Navigate, Component seviyesi Routing icin kullanilir.

//* useNavigate() ise imperative routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        {/* path yerine index yazarsak da çalışır, veya alttaki pathlerden / silersek de olur.  */}
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        {/* : dan sonra gelen 'id' bir parametre/değişkendir, (dinamik bir değerdir yani) PersonDetaile aktarılır. */}
        <Route path="/paths" element={<Paths />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="*" element={<Link to={"/"}/>} /> */}
        {/* eğer adres yanlışsa Home gidilsin yapmak istiyoruz, fakat burada Roure seviyesinde/Component seviyesinde Link çalışmaz. */}
        <Route path="*" element={<Navigate to={"/"} />} />
        {/* Navigate componenti ile re-direct yapılabilir. */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
