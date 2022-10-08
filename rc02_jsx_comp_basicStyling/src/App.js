import React from "react";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.js";

//? React,JSX kullanmaktadir.
//? JSX'de, HTMl elementleri dogrudan JS icerisinde kullanilabilir

//! Componentler, HTML,CSS ve JS kodlarindan meydana gelmiş
//! bir kod parcacigidir.

//! Bir componentin return () kismi ise JSX kodlari icerir.

//! JSX'in kendine gore bazi kurallari vardir. Ornegin bir
//! component eger birden fazla html elementi dondurmesi
//! gerekirse bunlari tek bir container elemani ile sarmayalarak
//! dondurmelidir.container icin div, article, header, <> v.b
//! herhangi bir element kullanilabilir.

//? App componentinin function declaration ile tanimlanmasi
function App() {
  return (
    <>
      <Header />
      <Footer />
      <Content/>
    </>
  );
}

export default App;
