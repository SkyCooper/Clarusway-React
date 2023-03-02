// rc03 module-css dersi
// ilave bilgi için frontend/session13 scss dersine bak


//! klasik scss'de olduğu gibi watch yapmaya gerek yok, react onu kendisi yapıyor.

//todo, 1- önce sass kütüphanesini eklemek gerekiyor.
yard add sass

//todo, 2- src altında scss klasörü açıp bütün dosyaları burada oluşturuyoruz.
// veya parçalı scss dosyaları ve Main.scss veta App.scss gibi ana dosyaları burada oluşturup diğer dosyaları her component altında açılan klasör içine oluşturabiliriz,
//? burada sass ile birlikte module-css kullandık
//? 07_moduleCSS notlarına bakılabilir,
// components -- card -- Card.jsx , card.module.scss gibi
// _reset.scss  _variable.scss  parçalı olanlar
// App.scss  card.module.scss    footer.module.scss parçalı olmayanlar,


// _reset.scss -- sıfırlamak için,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


// _variable.scss
//* https://color.adobe.com/tr/explore (eğer hazır tema kullanmak istersen buradan istediğn temayı seç ve scss olarak kopyala, Hex,RGBA, HSALA birtanesini seçip isimlerini düzenle, veya kendin isim verip renk belirle)
$red: #ff4858;
$olive: #1b7f79;
$aqua: #00ccc0;
$lightBlue: #72f2eb;
$grey: #747f7f;


//? parçalı scss dosyalarını import etme(App.scss içine);
@import "./reset", "./variables";

// body için font tanımlanma
body {
  font-family: Arial, Helvetica, sans-serif;
}



//? App.scss dosyasını App.js içinde import etme(.scss uzantı yazıyoruz)
import "./scss/App.scss";



//? variable kullanmak için,
// scss klasörü içinde; header.module.scss vs. gibi dosya oluşturup import et ve gerekli yerde kullan
// veya components içinde header isimli klasör aç, içine Header.jsx ve header.module.scss dosyası oluştur, orada import et ve kullan

@import "./variables";

.header {
  background-color: $red;
  padding: 3rem;
  text-align: center;
}



//? module.scss dosyasını component içinde kullanmak için obje gibi import et
// ismini ben belirliyorum bu da best practise KlasörismiStyle veya ComponentismiStyle --- ButonStyle -- CardStyle -- ImgStyle vs.
import HeaderStyle from "../scss/header.module.scss";


//? scss kullanma
// artık scss dosyaları js objesi gibi olduğundan  süslü ile kullanılacak, ve dot notasyonu ile ulaşılacak.
<header className={HeaderStyle.header}></header>
<button className={CardStyle.btn1}>Add</button>
// class isminde kabap-case kullanılmışsa  nokta notasyonu kullanılmaz, squarebracket yöntemi kullanılır.
//* ORN:moduleName["class-adi"]
<button className={CardStyle["buttons--btn2"]}>Delete</button>


//! incele yapınca;  class="card_container__zB4mx"  class="card_buttons--btn2__qQD5x" gibi uniq isimli oluyor.