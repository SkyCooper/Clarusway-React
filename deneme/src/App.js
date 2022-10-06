
import {Head, Nav, Footer as Foot} from "./components/header"
import {Paragraf} from "./components/paragraf"
import Myinput, { Buton } from "./components/button";
import { Myform } from "./components/form"
import Myimage from "./components/img";
import "./index.css"
import User from "./components/user"


function App (){
  return (
    <>
      <Head />
      <Nav />
      <Foot />
      <Paragraf title = "props deneme"/>
      <Paragraf title = "aynı componenet"/>
      <Paragraf title = "farklı props ile derleniyor."/>
      <Myinput />
      <Buton />
      <Myform />
      <Myimage />

      <User
      name = "Cooper"
      departman = "Backend"
      salary = "7777"
      />

      <User
      name = "SKY"
      departman = "Frontend"
      salary = "4444"
      />
    </>
  );
}

export default App