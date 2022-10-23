import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//! REACT ROUTER;
// react bir library(yani kütüphane), framework değil,
// bundan dolayı içerisinde herşey hazır olarak bulunmuyor,
// serbest olarak isteyen istediğini yükleyip/ekleyip kullanabiliyor.
// react-router kütüphanesinin de ayrıca yüklenmesi gerekiyor.
// yarn add react-router-dom
// böyle yazılırsa en son versiyonu yüklenmiş olur. (şu anda 6.4.2)
// yarn add react-router-dom@6.3 şeklinde yazılırsa istenen versiyon yüklenir.


//? BrowserRouter
// HTML 5 History API üzerine kurulmuştur. Sayfa yönlendirmelerini tutan ana bileşendir. Route yapısı kullanılacak tüm bileşenler / sayfalar BrowserRouter arasında olmak zorundadır.
// Tanımlanan Yerlere Sayfaların Render Edileceğini Bildiren component. En dış sarmallayıcıdır. {BrowserRouter as Router} olarak kullanılabilir. App/Index js nin birisinde sarmalayıcı olarak kullanılabilir.

// ?Routes:
// Konum her değiştiğinde, Routes en iyi eşleşmeyi bulmak için childları olan tüm alt Route öğelerine bakar ve kullanıcı arabiriminin bu dalını oluşturur.

//? Route:
// Url pathinde gelene göre hangi sayfanın(yani hangi componentin) render edileceğini belirtir.

//BrowserRouter ==> dede
//Routes ==> baba
//Route==> çocuk
//Nav-Footer ==> amca gibi kodlanabilir.

//? SSR - CSR
// react-rooter uygulamalarında server-side-routing (SSR) değil client-side-routing (CSR)  yapılıyor. yani ilk seferde bütün bilgiler kullanıcıya ham dosyalar olarak geliyor ve onun bilgisayarında parse ediliyor. Her defasında refresh olmuyor. Bir kere yüklendikten sonra hızlıca sayfa geçişi yapılabiliyor. CSR SEO açısında uygun değil, arama motorlarının işini zorlaştırıyor.  ayrıca harici kütüphaneler kullanmak gerekiyor(react-helmet gibi). CSR server üzerinden yükü alır, fakat loading-time biraz uzun olabilir.(Lazy-Loading kavramı burada devreye giriyor.)

// Single page application yani kısa adıyla SPA, tek HTML sayfası yükleyen bir uygulamadır ve uygulamanın çalışması için gerekli tüm dosyaları (JavaScript, CSS vb) içerir. Sayfa veya sonraki sayfalarla olan herhangi bir etkileşim için servera gidip gelmesi gerektirmez; bu da sayfanın yeniden yüklenmediği anlamına gelir.

function App() {
  return (
    <>
      <BrowserRouter> {/* 1 */}
        <Nav />
        {/* her sayfada olcaksa BrowserRouter içinde fakat Routes dışında yazılır. */}
        <Routes>  {/* 2 */}
        {/* Routes v5 ten sonra çıktı, önceden Switch vardı */}

          <Route path="/" element={<Home />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        {/* olmayan bir link gelirse not-found compenenti gelsin */}

        </Routes>
        <Footer />
      {/* her sayfada olcaksa BrowserRouter içinde fakat Routes dışında yazılır. */}
      </BrowserRouter>
    </>
  );
}

export default App;
