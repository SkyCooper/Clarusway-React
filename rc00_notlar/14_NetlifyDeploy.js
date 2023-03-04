// (rc07 2.51.30)

//? NETLIFY DEPLOY İŞLEMİ İÇİN;
//* 1- Manual Deploy:
// netlify giriş yaptıktan sonra Add new site yanındaki ok'a tıklayıp
// açılan menüden "Deploy manually" seç

yarn run build
// bu komutu deploy edilecek proje terminalinde çalıştır,
// proje klasörü altında "build" isimli klasör oluşuyor.
// bu klasör aslında bütün projenin pure html,css ve js olarak derlenmiş hali
// Bunu sürükle bırak yöntemi ile ilgili yere sürükle.
// Domain settings'--> options 'den isim değişikliği yap.

//! Manual Deploy yapıldıktan sonra projede değişiklik yapılırsa;
//! tekrardan yarn run build ile build klasörü oluşturup sürekle/bırak yapmak lazım



//* 2- Github ile: 
// a- önce projenin Github reposu oluşturulur (iç içe olmayan, tek proje olursa daha iyi olur).
// b- Netlify içinden "Add New site"den "Import an existing project" seçilir.
// c- Github'dan proje seçilir ve "Deploy site" edilir. 
// ç- Domain settings'--> options 'den isim değişikliği yapılır.

//? (continues integration / continues deployment ) : yani artık projdede bir değişiklik yapıldığında
//? Github'a push yapılınca otomatik olarak Netlify'dan değişir. 