// rc03 module-css dersi

// Module CSS
// SASS                         --> bu ikisi basic styling

// Bootstrap - React Bootstrap
// Styled Component
// Material UI
// Tailwind                     --> bunlar ve diğerleri third party styling kütüphaneleri

//* css dosyası import etme
// js/jsx uzantılı değil ise uzantı ismini belirtmek gerekir. Buton.css
// from kullanmaya gerek yok direk css dosyasını import et.
import "./Buton.css";

//* css kullanma
// aynen klasik css gibi className verilir "title btn-blue" gibi
<h1 className="title">{title}</h1>;

// react uygulamaları singel-page application olduğundan; yazılan ne kadar component ve harici css dosyası varsa hepsi en sonunda index.html içinde id'si root olan div içine basılır. bundan dolayı bir harici A klasörü içinde bulunan A.css dosyası içindeki .title classı için uygulanan css, B klasöründeki B.jsx dosyasına import edilmese bile herhangi bir elemente className olark verilirse css uygular. veya B klasöründeki B.css içinde .title classı için css tanımlanırsa A.css'teki .title classı ile çakışır veya birbirini ezer(en parentte hangisi varsa onun css'ini alır), karmaşıklık olur. eğer pure CSS kullanılacaksa her class ve id uniq isimli olmak zorunda yoksa çakışma olur. (.btn-title .card-title .img-title gibi,)

//* bundan kurtulmanın yolu module-css kullanmak
// çünkü react ile birlikte gelen/kurulan webpack içindeki derleyici dosya ismini .module.css olarak okuyunca  arka planda hepsine kendisi uniq class ismi veriyor.
// module-css için; daha önceden A.css B.css olan dosya isimleri card.module.css, buton.module.css olarak değişmesi gerekir.
//? klasörismi.module.css
// artık daha önce kullanılan klasik importlar değişecek ve js elementi/objesi gibi import edilecek
// import "./Buton.css";  -- eski hali
import ButonStyle from "./buton.module.css";
// ismini ben belirliyorum bu da best practise KlasörismiStyle --- ButonStyle -- CardStyle -- ImgStyle vs.

//* css kullanma
// artık css dosyaları js objesi gibi olduğundan  süslü ile kullanılacak, ve dot notasyonu ile ulaşılacak.
<h1 className={CardStyle.title}>{title}</h1>;
// class isminde kabap-case kullanılmışsa  nokta notasyonu kullanılmaz, squarebracket yöntemi kullanılır.
//* ORN:moduleName["class-adi"]
<h1 className={ButondStyle["btn-blue"]}>{title}</h1>;
// hepsi böyle de yazılabilir karmaşa olmasın diye
<h1 className={CardStyle["title"]}>{title}</h1>;

// daha önceden incele yapınca; class="title" olarak görünen class isimleri module css kullanınca
//! class="buton_title__zB4mx"  class="card_title__Hyt4c" gibi uniq isimli oluyor.
