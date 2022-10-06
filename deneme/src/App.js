import {Head, Nav, Footer as Foot} from "./components/header"
import {Paragraf} from "./components/paragraf"
import Myinput, { Buton } from "./components/button";
import { Myform } from "./components/form"
import Myimage from "./components/img";
import "./index.css"


function App (){
  return (
    <>
      <Head />
      <Nav />
      <Foot />
      <Paragraf />
      <Myinput />
      <Buton />
      <Myform />
      <Myimage />
    </>
  );
}

export default App