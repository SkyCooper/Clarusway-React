// best-practice src klasörü altına, components isimli yeni bir folder açıp içinde componentleri tanımlıyoruz.
// js veya jsx uzantılı olabilir, her ikisi de çalışır, jsx olursa önerileri daha hızlı sunabiliyor.

//* Harici bir dosya icersinde olusturulan bir component export default ile proje icerisinde herhangi bir yerde
//* kullanima kullanima acimiş olur. Kullanmak icin hedef dosyada import .... from "./..." ile import yapmak yeterlidir.


//? export / export default farkı
//* export default
//todo, import Header from "./components/Header.js" --> ile kullanılacak yerde import edilir.(default export)
// import BASLIK from "./components/Header.js" --> default kullanınca import ederken isim değitirilebilir,
// o zaman kullanılacak yerde component yeni ismi ile (BASLIK) çağırılır.

//* export
//todo, import {Header} from "./components/Header.js" --> ile kullanılacak yerde import edilir. (export ise süslü gerekir import ederken)
// direk export edilen component ismi değiştirilemez, aynen çağrılır (süslü içinde) ve kullanılır.



//? Class Component örneği;
// extends React.Component ve render() metodu kullanılır functiondan farklı olarak
// rce (export altta) veya rcc (export yanında) kısayol snippeti


class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Header</h1>
            </header>
        );
    }
}
export default Header;



//? Function Component örneği;
//? Function Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
// (1-function declaration, 2-function expression, 3-arrow function )

// JSX icerisinde degiskenler {} icerisinde gosterilir. {new Date().getFullYear()}
// rafce (export altta) veya rafc (export yanında) kısayol snippeti
// import Footer from "./components/Footer.jsx"


const Footer = () => {
  return <footer>Copyright by Clarusway, {new Date().getFullYear()} </footer>;
};
export default Footer;

