//? react nedir?
// 2011 yılında facebook tarafından geliştirilen component based, kullanıcı arayüzü oluşturan  hızlı bir javascript (library) kütüphanesidir. En popüler js kütüphanesidir. Amacı dinamik web sayfalarını daha hızlı görüntüleyebilmektir. Virtual DOM özelliği sayesinde daha az render ile daha hızlı çalışır.

// lazy loading : sayfanın tamamının değil sadece görünen kısmının render olması/yüklenmesi demek

// react modern JS kullanıyor, eski browser'larda BABEL isimli transpilier vasıtasıyla çeviriyor.

// MVC (mimarisi) : Model View Controller  demektir. React view (UI) katmanında (layer) çalışır, model ve controller backend katmanıdır. Değişiklik olduğu zaman sadece o katmanda işlem yapılabilir, mesela react yerine angular kullanılmak isteyince sadece view katmanı değişir.

// react-native (ios-android) öğrenmek için biraz çalışma yapıp sonra web / app dönüşümü yapılabilir.

//* react-developer-tool (eklenti)
//? https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
// eğer bir web sitesinde react kullanılmışsa simge renkli olur. 

// hangi framework ne kadar indirilmiş böyle bakılabilir.
//? https://npmtrends.com/angular-vs-react-vs-vue


//* Virtual DOM nasıl çalışıyor
// DOM'un mevcut halinin bir kopyasını alıp client'ın RAM belleğe koyuyor, ve onunda snapshot'ını alıyor, yani 2 kopya var elinde. (esas DOM browserda tutulur.) Bir değişiklik yapıldığında snapshot ile kopya DOM karşılaştırıyor, (Diff algoritması vasıtasıyla ) bu karşılaştırmanın RAM'de yapılması çok daha hızlı olmasını sağlıyor, çünkü DOM-Api'de olsa işlemler zaman alıyor. Daha sonra değişikliğin etkilediği componentleri bulup tek seferde toplu şekilde (batch-update) onları değiştiriyor/render ediyor ve DOM'a basıyor.


//* library - framework
// library, önden yazılmıl kodları vardır, istediğimizi alıp kullanabiliriz. 
// framework, herşey kendi içinde var ve bunun dışına çıkılmaz(ekosistem)-öğrenmesi daha zor,zorunlulukları var.


//* JSX - Javascript Xml
// HTML ve JavaScript kodlarının aynı dosyada kullanılmasıdır.
// JS dosyasında HTML yazar gibi kod yazmayı sağlıyor. Okuması ve anlaması daha kolaydır.
// Babel sayesinde yazılan jsx, düz js'ye çevrilir. 
//? https://babeljs.io/
// create react-app ile kurulum yapınca babel ve webpack otomatik arka planda kuruluyor ilave birşey yapmaya gerek yok.
//? https://create-react-app.dev/
// create-react-app react'ın official desteklediği bir template
// function veya class based component kullanıldığında retun bloğu ve içinde jsx kullanılır, diğer alanlarda düz js kullanılır.

// jsx içinde değişken kullanmak için {} süslü içine yazmak gerekiyor,
// style kullanırken çift süslü {{}} kullanılır, birincisi js için, ikincisi key/value formatındaki objenin kendi süslüsü
// jsx içinde bütün elemanlar kapsayıcı bir parent ile sarmallamak gerekiyor.( boş bir fragment veya bir div vs.)
// fragment : react'a özel içi boş element, DOM'da ilave yer işgal etmiyor.


//* component
// kendi HTML - CSS ve JS'si olan birimdir. lego mantığı , parçalar her yerde kullanılabilir.
// bu sayede daha modülerdir, re-usable'dır ve hızlı çalışır.
// class (stateful) - function (stateless) olarak 2 çeşittir, sadece syntax farkı vardır.
// 2019 yılında hook kullanılmasıyla function componentlerde state kullanılabilir olmuştur.

//* props
// akış yönüne uni-directional deniyor, yukarıdan aşağıya, yani parentten childe
// class componentlerde this.props ile ulaşılır.
// porps obje formatındadır {key:value}






