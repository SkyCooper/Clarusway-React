import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import Paths from "./pages/Paths";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

//? Link, NavLink ve Navigate componentleri DECLERATIVE routing gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapilan componentlerdir. (Nav v.b)

//? Navigate componenti sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirilmesi icin kullanilabilir. (v5 -> Redirect)
//? Navigate, Component seviyesi Routing icin kullanilir.

//* useNavigate() ise IMPERATIVE routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        {/* //*path yerine index yazarsak da çalışır, veya alttaki pathlerden / silersek de olur.  */}
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        {/* : dan sonra gelen 'id' bir parametre/değişkendir, (dinamik bir değerdir yani) PersonDetaile aktarılır. */}

        {/* <Route path="/paths" element={<Paths />} /> */}
        {/* //!Nested Route yapma, */}
        <Route path="/paths" element={<Paths />}>
          {/* pathler relative verildi */}
          {/* <Route path="fullstack" element={<FullStack/>}/> */}
          {/* //* aslında yukarıdaki gibi yazılır fakat o sayfada default birisinin gelmesini istiyorsak alttaki gibi path yerine index yazılır. böylece fullstack path açışında direk görünür. */}
          <Route index element={<FullStack />} />
          {/* <Route path="fullstack" element={<FullStack />} /> */}
          {/* //* yukarıdaki kullanımda fullstack linki url'ye eklenir. */}
          <Route path="aws" element={<Aws />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="*" element={<Link to={"/"}/>} /> */}
        {/* eğer adres yanlışsa Home gidilsin yapmak istiyoruz, fakat burada Roure seviyesinde/Component seviyesinde Link çalışmaz. */}
        <Route path="*" element={<Navigate to={"/"} />} />
        {/* Navigate componenti ile re-direct yapılabilir. */}

        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="/contact" element={<Contact />} />
          {/* yani contact sayfasına gelen mesela login olmamış ise önce privateContact sayfasına gitsin işlemlerini yapsın sonra contact sayfasına giriş yapabilsin */}
        </Route>
        <Route path="login" element={<Login/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
