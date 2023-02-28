//* NodeJS
// react kullanmak için NodeJS indirip, kurmak gerekli.
// https://nodejs.org/en/download/
// NodeJS google chorome üzerinde bulunan JS engine'nin locala alınmış hali, react js kullandığı için NodeJS'e ihtiyaç duyuyor.

// node -v
// ile versiyon kontrolü yapılabilir. ( v16.17.1)
// node versiyonunu güncellemek için tekrar indirip kurmak gerekli

//* npm
// https://www.npmjs.com/
// node package manager, node uygulamaları için paket yönetim sistemi, NodeJS kurulumu yapınca içinde npm ile birlikte geliyor.
// Bir nevi Node uygulamaları için AppStore, ihtiyaç duyulan uygulamalar buradan yükleniyor.

// npm -v
// ile versiyon kontrolü yapılabilir. (8.19.2 )
// npm i -g npm komutu ile tekrar npm kurup kendini günceller.

//* yarn
// https://www.npmjs.com/
// yarn npm benzeri harici bir paket yönetim sistemi, NodeJS ile kurulu gelmiyor, sonradan kurmak gerekiyor.
// npm i -g yarn komutu ile yarn kurulumu yapılır.
// yarn npm'e göre daha hızlı
// yarn -v ile versiyon kontrolü yapılır.


//! ---------------------------------
//! SIFIRDAN PROJE OLUŞTURMAK İÇİN;
//! ---------------------------------
// yarn create react-app my-app      -->       var olan dizine my-app isimli proje oluşturur.
// npx create-react-app my-app  (eğer yarn yüklü ise npx'de arka planda yarn kullarak derleme yapar, yoksa default npm kullanır)

// cd my-app                        -->         oluşturulan proje dizininde konumlan
// npm start (or yarn start)        -->         projeyi çalıştır.

// yarn create react-app .           -->       var olan dizin içine yeni klasör eklemeden proje oluşturur.
// yarn start

  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
//* yarn start komutu --> node_modules içinde scripts altında bulunan start keyine karşılık gelen hazır scripti çalıştır. 
//* gelişmiş projelerde eklenen scriptler burada belirtilebilir, mesela 2 satırlık bir script burada tek kelimelik bir key ile tanımlanıp sonradan çağırılarak çalıştırılabilir.

// ctrl + C                         -->     çalışan projeyi durdurur

//* masaüstünde çalışmak bazen problem yaratabilir, ondan dolayı C,D gibi bir dizinde çalışmak daha iyi olur.
//! proje ismi verirken;
    // boşluk yok
    // büyük harf yok
    // türkçe karakter yok

//! npx ile yapınca klasör içinde .git dosyası oluşur. eğer iç içe dosyalarla çalışıyorsak ve ana dosyada .git varsa içeridekini silmek gerekir, yoksa github'a push yaparken hata verebilir. (eğer push esnasında; sub module kullanmak mı istiyorsunuz gibi bir hata verirse böyle bir durum vardır. o zaman .git silmek gerekir.)


//? React içindeki dosya / klasörler,
//* node_modules
// klasörü içinde react'ın arka planda kullandığı ek kütüphanelerin dosyası vardır. gerekli olan / olabilecek herşey var
// .gitignore dosyasından dolayı github'a bu büyük dosya gitmez.

//* package.json dosyası
// projenin içinde neler var onu özetleyen bir dosya gibidir. sonradan kurulan bütün paketler "dependencies" içine eklenir.
// mesela yarn add axios ile axios kurulunca dependencies içine eklenir. 
// 1 - eğer kaldırmak istersek dependencies içinden ilgili satırı silip yarn veya yarn install / npm install yazınca tekrar projeyi derler ve dependencies içinde axios olmadığı için onu yüklemden son haline getirir.
// 2 - veya tam tersi dependicies içine "axios": "^1.3.4" yazıp, yarn veya yarn install / npm install yazınca tekrar projeyi derler ve dependencies içinde axios olduğundan  onu yükleyip son haline getirir.
//! yarn add axios bootstrap react-icons vs. peşpeşe yazınca tek serferde hepsini kurar.

// dependencies'ten silmeden yarn remove axios ile de kaldırılabilir, böylece de package.json tekrar güncellenir ve  "dependencies" içinden axios silinir.

//todo, çalışan proje ilave paket yüklemek için proje durdurulabilir, veya ikinci bir terminal açıp paket yüklemesi yapılabilir.

//* public
// klasöründe index.html var, yazdığımızı bütün kodlar, yapılan bütün componentler id="root" olan div içine kayıt edilir.
<div id="root"></div>

//* src 
// klasörü içindeki index.js'de id'si root olan elemeti yakalayıp onu DOM'a basıyor.
const root = ReactDOM.createRoot(document.getElementById("root"));

// index.js (Baba component) altında --> App.js (Anne component) onun da altında --> lotsofcomponents (Child component'ler)
// çalışma mantığı böyle kurgulanmıştır. hepsi index.js'den dağılır.
// ve en son bütün kodlar index.js sayesinde index.html içindeki id'si root olan div içine basılır.


// react kurulunca bazı kullanmadığımız dosyaları silerek sadeleştirme yapabiliriz, yapmazsak da problem olmaz yine de çalışır.
//? sadeleştirme nasıl yapılır,
// App.test.js dosyasını sil
// logo.svg dosyasını sil
// reportWebVitals.js dosyasını sil
// setupTest.js dosyasını sil
// App.css dosyasını sil

// App.js içindekileri sil, sadece böyle kalsın
function App() {
    return (
        <div>
            <h1>hello react</h1>
        </div>
    );
}
export default App;


// index.js içindekileri sil, sadece böyle kalsın
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


//!----------------------------------------
//! Pull edilen, internetten indirilen bir bir projenin çalıştırılması
//!----------------------------------------
// package.json dosyası ile aynı dizinde olacak şekilde,
// yarn , yarn install , npm i , npm install
// bu komutlardan herhangi birisi çalıştırılarak package.json / dependicies içindeki paketler kurulur ve 
// node_modules dosyası tekrardan kurulur
// yarn start ile proje çalıştırılır.


//* vscode ayarı;
// terminali default bash olarak ayarla, (sağ alttan + yanındaki ok bas, açılan meüden, Select Default Profile, sonra açılan menüden Git Bash seç)
// sol alt köşedeki çark simgesi(ayarlar), settings, açılan search bar'a (emmet) yaz
// Emmet: Include Languages bölümüne; key:javascript - value:javascriptreact bunları yaz
// HTML'deki emmetleri JSX içinde kullanmaya yarar, h1 container yazınca clasName container olan bir h1 elementi oluşur.
// ES7 extansion yükle
