// React ortamında 2 türlü bootstrap kullanımı vardır,
//* https://react-bootstrap.github.io/getting-started/introduction

//! 1- ilkel kullanım, yani Html'deki gibi kullanım, BOOTSTRAP İÇİN;
//todo, birinci yöntem
yarn add bootstrap 
// css linkini App.js veya index.js içine yapıştır.
import 'bootstrap/dist/css/bootstrap.min.css';


//todo, ikinci yöntem yöntem
// public içindeki index.html head tagı içerisine ekle;
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>


//? Artık kullanıma hazır, bootstrap classlarını clasName="" ile kullanabiliriz.
// böylece daha önceden klasik html ile hazırlanmış ve bootstrap kullanılmış projeleri
// "html to react" -- "html to jsx"vs gibi sitelerden çevirerek react ortamında kullanabiliriz.




//! 2- Component based kullanım, REACT-BOOTSTRAP İÇİN;
yarn add react-bootstrap 

//* (bu komut ikisini biredn kurar)
yarn add react-bootstrap bootstrap 

// css linkini App.js veya index.js içine yapıştır.
import 'bootstrap/dist/css/bootstrap.min.css';

//? component olarak eklemek için,
// 1nci yöntem ile container eklemek için, süslü içinde 
import {Container} from "react-bootstrap"  
// 2nci yöntem ile container eklemek için, veya böyle (daha doğru kullanım bu)  
import Container from "react-bootstrap/Container";


//! BOOTSTRAP KURDUKTAN SONRA, AÇILIR MENULER VB ÇALIŞMASI İÇİN;
// script linklerini index.html' de body kapanış tagı üzerine ekle,
 
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"
    ></script>