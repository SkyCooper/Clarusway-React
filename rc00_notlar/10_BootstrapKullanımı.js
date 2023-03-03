// React ortamında 2 türlü bootstrap kullanımı vardır,
//* https://react-bootstrap.github.io/getting-started/introduction

//! 1- ilkel kullanım, yani Html'deki gibi kullanım
yarn add bootstrap 

// css linkini App.js veya index.js içine yapıştır.
import 'bootstrap/dist/css/bootstrap.min.css';

//? Artık kullanıma hazır, bootstrap classlarını clasName="" ile kullanabiliriz.
// böylece daha önceden klasik html ile hazırlanmış ve bootstrap kullanılmış projeleri
// "html to react" -- "html to jsx"vs gibi sitelerden çevirerek react ortamında kullanabiliriz.



//! 2- Component based kullanım
yarn add react-bootstrap 

// (bu komut ikisini biredn kurar)
yarn add react-bootstrap bootstrap                      