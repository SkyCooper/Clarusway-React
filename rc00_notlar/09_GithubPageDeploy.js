//! React Projesi Github-Page Deploy işlemleri

//? 1- githubpage paketini kur
yarn add gh-pages 
npm i gh-pages 
// package.json dependencies içinde "gh-pages" : "^3.1.0" gibi görünmesi gerekir.


//? 2- package.json içine "scripts" altına bu komutları ekle;
"predeploy" : "yarn run build",
"deploy" : "gh-pages -d build"
// eğer npm kullandıysan  "npm run build", olacak


//? 3- package.json'ın en üstüne elle deploy adresini ekliyoruz.
"homepage" : "https://skycooper.github.io/Team-Members/"
// https:// github-username.github.io / repo-name 
// burada repo içinde default index.html'i deploy eder, eğer isim farklı ise yazmak gerekir 
// "https://skycooper.github.io/Team-Members/member.html" gibi
// veya html dosyası ilave bir klasör içinde ise onu belirtmek gerekir
// "https://skycooper.github.io/Team-Members/content/" gibi


//? 4- deploy komutunu çalıştır
yarn/npm run deploy 


//? 5- Github'dan ilgili repoyu gel,
//* Settings / Pages içinden Branch olarak gh-pages seç ve SAVE et


//? 6- artık aynı sayfadaki yukarıdaki link aktif olarak çalışıyor,
"https://skycooper.github.io/Team-Members/"
// kontrol için tıkla ve gör