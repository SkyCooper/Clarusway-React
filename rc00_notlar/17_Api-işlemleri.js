//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri, Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------
//* sıralı bir şeklilde yukarıdan aşağıya doğru çalışan programlar, takibi kolaydır.

const wait = (waitingTimeMilisecond) => {
    const startTime = new Date().getTime(); // milisecond cinsinden süre verir.
    while (new Date().getTime() < startTime + waitingTimeMilisecond) {}
};

console.log("Hello");
alert("blocking code"); //! blocking code (bu geçmeden alttaki kod çalışmadığından dolayı)

console.time("timer"); // süreyi ölçmek için başlattı
wait(3000); //!blocking code
console.timeEnd("timer"); // sonunda ölçtü, tam 3000 çıkmaz ve herseferinde değişebilir.

console.log("Cohort-12"); // yukarıdaki ile aynı anda gelir, yani 3000ms sonra

//* Asenkron (setTimeout)  --> bize bir kere zaman oluşturuyor, non-blocking code
//* ------------------------------------------------

// console.log("selamlama başladı");

// setTimeout(()=>{
//   //!non-blocking
//   console.log("selamlama 1sn gecikti");
// },1000)  // içindeki kodu 1000milisaniye yani = 1saniye sonra getirir.
// // süre 0 bile olsa sonradan gelir, çünkü bir kere kuyruğa girer ve önceliği değişir.

// setTimeout(() => {
//   //!non-blocking
//   console.log("selamlama 0.5sn gecikti");
// }, 500 );  // içindeki kodu 0,5 saniye sonra getirir.
// // üstteki ile süre aynı olsa bu sefer sıraya üstteki önce girer ve önce üstteki görünür.

// console.log("selamlama bitti"); //önce selamlama başladı çalışır ve sonra diğerleri kuyruğa girer ve sürelerine göre gelirler, ondan dolayı 2nci sırada bu kod çalışır.

//* Asenkron (setInterval, clearInterval)  --> bize belirli zaman tekrarı oluşturuyor, non-blocking code
//* ------------------------------------------------

// console.log("Timer Arrange"); //*1nci

// console.log("Timer Started"); //*2nci
// let counter = 0;
// const sureliTekrar = setInterval(() => {
//   // fonksiyon dönüş değerini değişkene atadık, isim önemli değil
//   console.log(++counter);
//   if (counter > 4) {
//     clearInterval(sureliTekrar);  // counter 4 ten büyük olduğu zaman tekrarı durdurur.
//     console.log("Timer Counter Stoped"); //*sonuncu
//   }
// }, 1000); // her 1snde counter 1 arttır demek

// console.log("Timer Stoped"); //*3ncü

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

// setTimeout(() => {
//   console.log("john:Hi");
//   setTimeout(() => {
//     console.log("Sarah: Hello");
//     setTimeout(() => {
//       console.log("John: How Are you?");
//       setTimeout(() => {
//         console.log("Sarah:Fine and you?");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)

//* =================================================
//*                2- Promises
//* =================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){  //* fonksiyon parametreleride birer fonksiyon
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

console.log("Promise");

const myPromise = new Promise((resolve, reject) => {
    // isimler değişebilir ama best practise kullanım budur. Bunlarda fonksiyondur.
    // resolve --> başarılı ise 200 başlar
    // reject --> başarısız ise 400 başlar

    const success = Math.floor(Math.random() * 2);
    console.log(success);
    //* 0,1,2 rastgele bu üç sayıdan birisini üreten bir değişken oluşturduk.
    const data = { a: 1, b: 2 };
    //* data isimli bir obje oluşturup içine temsili olarak değerler yazdık.
    if (success) {
        //* eğer rastgele sayımız 1 veya 2 gelirse yani TRUE ise ekrana Data fetched yaz,
        //* resolve ile yani başarılı ile datayı yazdır.
        console.log("Data fetched");
        resolve(data);
    } else {
        //* eğer rastgele sayımız 0 gelirse yani FALSE ise reject ile hata mesajını yazdır.
        reject(new Error("Fetch halted")); // sıfır gelirse hata kodu çalışır.
    }
});

myPromise
    .then((response) => console.log(response))
    .catch((error) => console.log(error)); // hata verirse error adı yazar --> Error: Fetch halted

//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

//! süslü kullanılırsa return kullanmayı unutma

console.log("FETCH");
fetch("https://api.github.com/users")
    // status: 200 --> yani başarılı  400-->client hatası 500-->server hatası
    // ilave bir şey yazılmaz ise GET olarak çalışır, veri çeker.
    // çoğu ihtimali başarılı kabul eder, bana bir response geldiyse başarıdır gibi
    .then((response) => response.json())
    // ham haline response denir bestPractise
    // bunu json fotmatına çevirmek gerekli
    .then((data) => updateDOM(data))
    // verinin işlenmesi data ile yapılır, bestPractise, isim önemsiz.
    .catch((err) => console.log(err));
// başarısız olursa hatayı yaklamak için catch kullanılır.

//? hata durmunu simüle etmek için api isminden sondaki s harfini sildi;
// fetch("https://api.github.com/user")
//   .then((response) => {
//     console.log(response);
//     //!Error handling
//     if (!response.ok) {
//       //*paket düzfün gelmedi, false oldu ok: false,
//       throw new Error("Something went wrong!!");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//**API den veri çekip DOM'a yazdırmak için bir örnek çözümü yaptı */
const updateDOM = (users) => {
    console.log(users);
    const userDiv = document.querySelector(".users");
    // sabit olan kapsayıcı div seçti
    users.forEach((user) => {
        //! const {login, avatar_url} = user  ile destruct yapılsa
        //! her defasında user. yazmaya gerek olmaz.
        console.log(user); //30 elemanı tek tek obje olarak konsola basar
        userDiv.innerHTML += ` <h2> ${user.login}</h2>
      <img src="${user.avatar_url}"  width="300px" alt="">`;
    });
};

//*=================================================
//*              ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//! async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi satirdaki kodun durudurulmasini saglar.

//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesine ile kodun calismasi devam eder.

//? görüntüsü syntax olarak senkrona benzer, sıralı olarak yazılır fakat asenkron çalışır.
//? Bir kodun işlemin bitmeden kodun aşağıya geçmesini engeller.
//? await kullanmak için mutlaka async keyword gerekir.

// https://newsapi.org/v2/top-headlines?country=us&apiKey=2ae73e0e340345b39a263c6557eb8796

//! apikey .env (enviroment) dosyasına konur ve github da ignore edilir, gözükmez, böylece kullanıcı göremez saklı kalır.

let isError = false;
//* flag mantığı ile bir değişken oluşturduk, render esnasında hata varsa

const getNews = async function () {
    const API_KEY = "2ae73e0e340345b39a263c6557eb8796";
    const url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;

    //* çalışan kodlar try bloğuna, muhtemel olacak hataları catch bloğuna yazılır.
    try {
        const res = await fetch(url);
        // console.log(res);
        if (!res.ok) {
            isError = true;
            //* hata varsa flag true olsun,

            throw new Error(`Something went wrong. Code : ${res.status}`);
            //* hata verdirmek için key den bir karakter sildik
            //* hata resmini ekranda görmek için yukarıdaki kod bloğunun kapanması gerekir.
        }
        const data = await res.json();
        const { articles } = data; //!destruct yapıldı ve data. dan kurtulduk
        console.log(articles);
        renderNews(articles);
    } catch (error) {
        console.log(error);
    }
};

const renderNews = (news) => {
    const newsList = document.getElementById("news-list");
    if (isError) {
        newsList.innerHTML += `
      <h2>News Can not be fetched</h2>
      <img src="./img/404.png" alt="" />
    `;
        return;
    }

    news.forEach((item) => {
        const { title, description, urlToImage, url } = item; //! dest
        newsList.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="card">
        <img src="${urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a href="${url}" target="_blank" class="btn btn-danger">Details</a>
        </div>
      </div>
    </div>
    `;
    });
};

// getNews();
window.addEventListener("load", getNews);
//* böyle de çağrılabilir fonksiyon

//! -----------------------------------------------
//! BURAYA KADAR OLANLAR VANILYA JS ICIN ÖRNEKLER
//! -----------------------------------------------



//todo --------------------------------------------------
//todo REACT ININ ORNEKLER
//todo --------------------------------------------------

//? ********************
//? FETCH
//? ********************

const User = () => {
    const [user, setUser] = useState("");

    const getUser = () => {
        fetch("https://randomuser.me/api")
            .then((res) => res.json())
            .then((data) => setUser(data.results[0]));
    };

    useEffect(() => {
        //?componentDidMount
        getUser();
    }, []);

    console.log(user);
    const { name, dob, email, picture } = user;
};

//? ********************
//? AXIOS
//? ********************

const Home = () => {
    const [tutorials, setTutorials] = useState([]);

    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

    //? CRUD: (GET-READ)
    const getTutorials = async () => {
        try {
            // hata varsa yakalamak için try-catch bloğu içine yazıyoruz.
            const { data } = await axios(url);
            // axios datayı alıp, res.JSON yapmaya gerek olmadan veriyi JSON yapıyor.
            // apiden gelen veri data keyi içindeki arrayde olduğundan yolda destruct etti.
            console.log(data);
            setTutorials(data);
        } catch (error) {
            console.log(error);
        }
    };

    //? didmount
    useEffect(() => {
        getTutorials();
    }, []);
};

const AddTutorial = ({ getTutorials }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTutor = { title, description };
        // { "title" title, "description" : description } key/value olarak objeye çevirdik gelen verileri
        // üstteki kısa kullanım, key/value isimleri aynı isimli olduğundan böyşe kullanılabilir.
        //     {
        //     "id": 954,
        //     "title": "cooper",
        //     "description": "deneme",
        //     "published": false,
        //     "createdAt": "2022-10-19T05:38:16.376Z",
        //     "updatedAt": "2022-10-19T05:38:16.376Z"
        // }, biz sadece title/description yazıyoruz diğer bilgileri (ID vs.) api otomatik yapıyor.
        addTutorial(newTutor);
        // girilen statelerden oluşturulan yeni obje addTutorial'a parametre olarak atandı.
        setTitle("");
        setDescription("");
        // preventDefault ile sayfanın refresh olması engellendi fakat formu temizlemek için içini yukarıdaki gibi boşalttık.
    };

    //! POST - CRUD (Create)
    const addTutorial = async (newTutor) => {
        const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
        try {
            await axios.post(url, newTutor);
            // sadece axios yazarsak get işlemi yapar, onun için başına POST yazıyoruz.
            // 2 parametre alıyor, post yapılacak api adresi ve post edilecek veri
            // url sabit, veri ise parametre olarak fonksiyondan geliyor.
        } catch (error) {
            console.log(error);
        }
        getTutorials(); // yukarıdan prop olarak gönderildi, havada destrut edildi ve burada kullanıldı.

        // post yapıldıktan sonra veri girişi oluyor fakat aşağıdaki listede görünmüyor. çünkü React sadece ilgili yeri render ediyor. bunun için TutorialList componentinin güncellenmesi lazım(state veya prop değişmesi lazım.)
        // post ile veri tabanına veri yazıldığından sadece orası güncellendi.
        // getTutorials() fonksiyonu ise serverden API ile get işlemi yaptığından, içindeki setTutorials() ile tutorials statini güncelledi
        // ikiside statelerini home componentinden aldığı için oradaki  getTutorials() fonksiyonu prop olarak 2 componente gönderilir.
        //!  <AddTutorial getTutorials={getTutorials} />
        //! <TutorialList tutor={tutorials} getTutorials={getTutorials} />
    };
};
