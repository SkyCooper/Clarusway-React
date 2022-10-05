import {Head, Nav, Footer as Foot} from "./components/header"
import {Paragraf} from "./components/paragraf"
import Kestane, {Buton} from "./components/button"
import { Myform } from "./components/form"
import Myimage from "./components/img";


function App (){
  return (
    <>
      <Head />
      <Nav />
      <Foot />
      <Paragraf />
      <Kestane/>
      <Buton />
      <Myform />
      <Myimage/>
    </>
  );
}

export default App