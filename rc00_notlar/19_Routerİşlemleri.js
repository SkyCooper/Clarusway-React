//* REACT ROUTER;  (rc11-12 )
//* https://reactrouter.com/en/main   ana sayfa en son sürüm,
//? https://reactrouter.com/en/v6.3.0   6.3 için dokümantasyon
// react bir library(yani kütüphane), framework değil,
// bundan dolayı içerisinde herşey hazır olarak bulunmuyor,
// serbest olarak isteyen istediğini yükleyip/ekleyip kullanabiliyor.

// NextJS framework'de alternatif olarak çokça kullanılar bir routing çeşitidir, ama en çok react-router kullanılır

// react-router kütüphanesinin de ayrıca yüklenmesi gerekiyor.
yarn add react-router-dom
// böyle yazılırsa en son versiyonu yüklenmiş olur. (şu anda 6.4.2)
// fakat 6.3 gibi yazılan kodlar da çalışır

yarn add react-router-dom@6.3 
// şeklinde yazılırsa istenen versiyon yüklenir.


//? BrowserRouter
// HTML 5 History API üzerine kurulmuştur. Sayfa yönlendirmelerini tutan ana bileşendir.
// Route yapısı kullanılacak tüm bileşenler / sayfalar BrowserRouter arasında olmak zorundadır.
// Tanımlanan Yerlere Sayfaların Render Edileceğini Bildiren component. En dış sarmallayıcıdır. 
//* import { BrowserRouter as Router } from "react-router-dom";  böylede kullanılabilir.
// App/Index js nin birisinde sarmalayıcı olarak kullanılabilir.

// ?Routes:
// Konum her değiştiğinde, Routes en iyi eşleşmeyi bulmak için childları olan tüm alt Route öğelerine bakar ve kullanıcı arabiriminin bu dalını oluşturur.

import { Routes, Route } from "react-router-dom";

//? Route:
// Url pathinde gelene göre hangi sayfanın(yani hangi componentin) render edileceğini belirtir.
//! Self closing'de olabilir, sarmalayıcı gibide kullanılabilir.
// path ve element isimli 2 probu var, path ... olursa .... elemanını/componentini çağır demek,
// path="*" yani belirttiğim pathlerden başka birşey olursa , burada notfound comp gibi birşey yapılabilir.


// BrowserRouter ==> dede
// Routes ==> baba
// Route==> çocuk
// Nav-Footer ==> amca gibi kodlanabilir.

//? SSR - CSR
// Server Side Routing ----- Client Side Routing
// react-rooter uygulamalarında server-side-routing (SSR) değil client-side-routing (CSR)  yapılıyor. yani ilk seferde bütün bilgiler kullanıcıya ham dosyalar olarak geliyor ve onun bilgisayarında parse ediliyor. Her defasında refresh olmuyor. Bir kere yüklendikten sonra hızlıca sayfa geçişi yapılabiliyor. CSR SEO(SearchEngineOptimization) açısında uygun değil, arama motorlarının işini zorlaştırıyor.  ayrıca harici kütüphaneler kullanmak gerekiyor(react-helmet gibi). CSR server üzerinden yükü alır, fakat loading-time biraz uzun olabilir.(Lazy-Loading kavramı burada devreye giriyor.)

//? Loading time kısaltmak, sayfanın daha hızlı çalışması için,
//* https://legacy.reactjs.org/docs/code-splitting.html
// Code Splitting kavramı incelenebilir.
// Before:
// import OtherComponent from './OtherComponent';

// After:
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
//* yani hemen import etme, ihtiyaç olduğu zaman import et demek,

// Single page application yani kısa adıyla SPA, tek HTML sayfası yükleyen bir uygulamadır ve uygulamanın çalışması için gerekli tüm dosyaları (JavaScript, CSS vb) içerir. Sayfa veya sonraki sayfalarla olan herhangi bir etkileşim için servera gidip gelmesi gerektirmez; bu da sayfanın yeniden yüklenmediği anlamına gelir.

<>
      <BrowserRouter> {/* 1 */}
        <Nav />
        {/* her sayfada olcaksa BrowserRouter içinde fakat Routes dışında yazılır. */}
        <Routes>  {/* 2 */}
        {/* Routes v5 ten sonra çıktı, önceden Switch vardı */}

          <Route path="/" element={<Home />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        {/* olmayan bir link gelirse not-found compenenti gelsin */}

        </Routes>
        <Footer />
      {/* her sayfada olcaksa BrowserRouter içinde fakat Routes dışında yazılır. */}
      </BrowserRouter>
    </>


//? Link NavLİnk
// yönlendirme için kullanılır,
// to, probunu kullanır.
// <a/> tagı kullanılırsa router dışına çıkmış olur. ve her tıklamada refresh olur
// Link NavLİnk kullanınca sayfa geçişi hızlı olur ve refresh olmaz,
//! Link NavLink farkı active olup olmadığını fark etmesidir.
// yani tıklandı mı, tıklanmadı mı? renk değişiyor. NavLinkte style={({ isActive }) probu var, 6.4 ten dolayı home herzaman kırmızı, yeniden yarn add reac-router-dom@6.3 yapıp yarn start yapınca düzeldi..



import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <NavLink style={({ isActive }) => ({
                    color: isActive && "red",
                    })} to="/contact">
        Contact
        </NavLink>
      </li>
    </ul>
  );
};

//! Dynamic-Routing;
// people componentinden tıklama ile personDetail componentinin çalışması;

//* people
{people?.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div
              key={id}
              className=" col-sm-12 col-md-6 col-lg-4"
              type="button"
              //?1nci yöntem
              // onClick={() => navigate(`/people/${id}`, { state: person })}
              //? açılan sayfada önceden fetch yapılan veri içinden id ye göre filitreleme yapma
              //? state keyi ile fetch edilen veri obje olarak gönderilir, başka isim kabul etmiyor, state olmak zorunda

              //! 2nci yöntem
              onClick={() => navigate(`/people/${id}`)}
              //* ablolute path, url'nin hepsi yazılıyor.

              // onClick={() => navigate(`${id}`)}
              //* relative path, yani var olan adres sonuna ekleme yapıyor.
              // eğer / slash yoksa bunu relative algılar, daha kullanılışlıdır, path güncellemesi daha kolay olur,

              //! yani açılan sayfada id'ye göre yeniden fetch yapma
              //! state ile var olan person objesini yollamaya gerek yok.
            >
              <img className="rounded-circle" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
          );
        })}


//* personDetail
//? 1nci yöntem, önceden fetch yapılan objeden faydalanma
  // const navigate = useNavigate();
  // const { id } = useParams();
  //todo,    App.js den hangi ismile aktarıldıysa öyle yakalanır.
  //todo,   <Route path="/people/:id" element={<PersonDetail />} />
  // console.log(id);
  //? const { state } = useLocation();
  //? state olarak destruct edip kullanabiliriz.
  // const { state: person } = useLocation();
  //? gönderirken state yazmak zorunlu ama burada isim değiştirebiliriz, ve artık person olarak kullanabiliriz.
  // console.log(person);
  //? 1numaralı resme tıklayınca konsolda çıkan veriler... {id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg'},

  //? link dinamik olduğu için direk adres yazınca çalışmaz. /pepole/2 yazarsak olmaz. çünkü önce tıklama olacak, tıklama ile birlikte id ve person objesi aktarılacak ve oradan bilgiler alınacak. direk yazınca Onclick olmayıp, bunlar  yapılmadığı için link çalışmaz.

  //! 2nci yöntem, yeniden id ye göre fetch yapma;

  //! önceden yapılan fetch kodlarını alıp people yerine person yazarak kodu güncelledi,

  //! useState import et, ve sadece 1 obje çekeceğimiz için state [] dizi olmasına gerek yok, "" null yapabiliriz.

  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  //! api adresini backtick içinde id değişkeni ile yeniden düzenle
  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          setLoading(false);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  };

  //! useEffect hook import et
  useEffect(() => {
    getPerson();
  }, []);

  //! her defasında yeniden fetch yapıldığı için daha yavaş çalışır, fakat artık linke direk adres (/pepole/2) yazınca hata vermez ve link açılır.

  //todo getPerson direk useEffet içinde çağırılarakda yazılabilir aslında
  // useEffect(() => {
  //   fetch(`https://reqres.in/api/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPerson(data.data))
  //     .catch((err) => console.log(err));
  // }, []);

//? Link, NavLink ve Navigate componentleri DECLERATIVE routing gerceklestirmek icin kullanilir.
//? Ornegin: Link ve NavLink Sayfada gorulebilen, kullanciyla
//? bir etkilesim icerisinde bulunarak yonledirme yapilan componentlerdir. (Nav v.b)

//? Navigate componenti sayfada gorulmeyen ve programsal olarak bir linkin
//? bir baska linke yonledirilmesi icin kullanilabilir. (v5 -> Redirect)
//? Navigate, Component seviyesi Routing icin kullanilir.

//* useNavigate() ise IMPERATIVE routing icin elverislidir.
//* Ornegin bir fonksiyon,event veye UseEffect icerisinde programsal
//* olarak yonledirme yapmak icin kullanilabilir.

<>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        {/* //*path yerine index yazarsak da çalışır, veya alttaki pathlerden / silersek de olur.  */}
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        {/* : dan sonra gelen 'id' bir parametre/değişkendir, (dinamik bir değerdir yani) PersonDetaile aktarılır. */}

        {/* <Route path="/paths" element={<Paths />} /> */}
        {/* //!Nested Route yapma, */}
        <Route path="/paths" element={<Paths />}>
          {/* pathler relative verildi */}
          {/* <Route path="fullstack" element={<FullStack/>}/> */}
          {/* //* aslında yukarıdaki gibi yazılır fakat o sayfada default birisinin gelmesini istiyorsak alttaki gibi path yerine index yazılır. böylece fullstack path açışında direk görünür. */}
          <Route index element={<FullStack />} />
          {/* <Route path="fullstack" element={<FullStack />} /> */}
          {/* //* yukarıdaki kullanımda fullstack linki url'ye eklenir. */}
          <Route path="aws" element={<Aws />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="*" element={<Link to={"/"}/>} /> */}
        {/* eğer adres yanlışsa Home gidilsin yapmak istiyoruz, fakat burada Roure seviyesinde/Component seviyesinde Link çalışmaz. */}
        <Route path="*" element={<Navigate to={"/"} />} />
        {/* Navigate componenti ile re-direct yapılabilir. */}

        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="/contact" element={<Contact />} />
          {/* yani contact sayfasına gelen mesela login olmamış ise önce privateContact sayfasına gitsin işlemlerini yapsın sonra contact sayfasına giriş yapabilsin */}
        </Route>
        <Route path="login" element={<Login/>}/>
      </Routes>

      <Footer />
    </>


//* UseNavigate kullanımı;
// önce import et
import { useNavigate } from "react-router-dom";

// sonra bir değişkene ata
const navigate = useNavigate();

<div>
    <button
    onClick={() => navigate("/")}
    className="btn btn-success me-2"
    >
    Go Home
    </button>
    <button onClick={() => navigate(-1)} className="btn btn-warning">
    {/* (-1) ile bir histordeki önceki sayfaya gelir, (-2) ile 2 önceki sayfaya gider, (1) ileri gider, ama (2) olmadığı için çalışmaz. */}
    {/* konsoldan history.back(-1) veya history.forward() yazınca iler/geri gider. navigate aslında arka planda bunu kullanır.*/}
    {/* <button onClick={() => navigate("/people")} className="btn btn-warning"> */}
    {/* böylede direk önceki adres yazılabilir. */}
    Go Back
    </button>
</div>


//? NESTED ROUTE  (RC-13 --- 2.36)
//* https://reactrouter.com/en/main/start/overview
//* https://remix.run/_docs/routing

//! 1- Router içineki işlem
// Route self closing değil, sarmalayıcı olarak yazılır,
// içindeki route'lar self closin olabilir.

{/* //!Nested Route yapma, */ }
<Route path="/paths" element={<Paths />}>
  {/* pathler relative verildi */}
  {/* <Route path="fullstack" element={<FullStack/>}/> */}
  {/* //* aslında yukarıdaki gibi yazılır fakat o sayfada default birisinin gelmesini istiyorsak alttaki gibi path yerine index yazılır. böylece fullstack path açışında direk görünür. */}
  <Route index element={<FullStack />} />
  {/* <Route path="fullstack" element={<FullStack />} /> */}
  {/* //* yukarıdaki kullanımda fullstack linki url'ye eklenir. */}
  <Route path="aws" element={<Aws />} />
</Route>


//! 2- Component içineki işlem
// <Outlet /> çağırılır,
const Paths = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <h1>
        Online IT Courses to Become a Qualified IT Professional with Clarusway
      </h1>

      <Outlet />
      {/* //todo, nested route oluşumunda açılacak olan yeni component için yer tutuyor */}
    </div>
  );
};

export default Paths;


//? PRIVATE ROUTER, (RC-13 --- 3.06)

import { Navigate, Outlet } from "react-router-dom";

//! 1- Router içinde nested bir route oluşturuyoruz,
<Route path="/contact" element={<PrivateRouter />}>
  <Route path="/contact" element={<Contact />} />
  {/* yani contact sayfasına gelen mesela login olmamış ise önce privateContact sayfasına gitsin işlemlerini yapsın sonra contact sayfasına giriş yapabilsin */}
</Route>


//! 2- PrivateRouter isminde bir Component oluştur,
const PrivateRouter = () => {
  // const user = true;
  //* yani kullanıcı giriş yaptıysa outleti yani App.js içindeki child componenti yani contactı göster.

  const user = false;
  //* yani kullanıcı giriş yapmadıysa Login sayfasını göster ve giriş yapmaya yönlendir.

  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;