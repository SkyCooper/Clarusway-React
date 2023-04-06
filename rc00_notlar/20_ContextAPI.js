// RC-19 Context API, (GLOBAL STATE MANAGEMENT)

// React;
// Theme, yani tema kullanımında
// Language, yani dil değişimlerinde
// Login, authentication username işlemlerinde CONTEXT kullanılmasını öneriyor.

// Prop drilling yapmanın zor olduğu yerlerde contex API kullanmak mantıklı, heşeyi globala bağlamamak lazım,
// 3 tane useState ile 1 tane useContex kullanılabilir. yani local/global stateler beraber kullanılabilir.

// Redux-> Store,      Context -> context      ortak saklama alanı ismi,

// Özetle, context ve redux aynı değil, benzer şeyler,
// Basit projelerde context kullanmak mantıklı ve yeterli, (statik, flood mantığı olan yerlerde)
// (mesela dil, bir kere değişir sonra artık ellenmez gibi)
// Daha karmaşık / dinamik projelerde(sepete ekle / çıkar gibi) redux kullanmak daha faydalı

//todo 1-CREATE
// 1.	Önce contexi oluştur. (CREATE)
const ThemeContext = React.createContext('light');

//todo 2-PROVİDER
// 2.Kullanılacak yeri.provider ile sarmala(PROVİDER)

    < ThemeContext.Provider value = "dark" >
        <Toolbar />
    </ThemeContext.Provider >

//todo 3-CONSUME
// 3.ihtiyaç olan yerde kullanma(CONSUME)  useContext hook kullanarak,
contextType = ThemeContext;
render() {
    return <Button theme={this.context} />;
}


// Props mantığında; Dede torunun torununa harçlık verecek ama bunu doğrudan ulaştıramıyor. önce oğluna veriyor o onun oğluna uzayıp gidiyor.

// Contextte ise şöyle düşünebiliriz; Dede bir banka hesabı açıyor childlarına torunlarına hesabı kullanma yetkisi veriyor torun artık doğrudan parayı banka hesabından alabiliyor veya banka hesabına para aktarabiliyor




////*****CONTEXT ÖZETİ ABDULLAH HOCA******/////

//! Props Drilling nedir?
//? state ve verilerin parent'dan child'e akışını ifade eder.

//! Context nedir?
//? React uygulamasında, veriler propslar aracılığıyla yukarıdan aşağıya (parent--> çhild) iletilir, ancak bu tür bir kullanım, bir uygulama içindeki birçok Conpenent tarafından gerekli olan belirli türde propslar (örn. yerel ayar tercihi, UI teması) için zahmetli olabilir. Context, Props Drilling yapmadan Conpenentler arasında değerleri paylaşmanın bir yolunu sağlar.

//! State ve verileri local veya Global'de oluşturma arasındaki fark?
//? Conponent'in render edilme nedenlerinden biri içersinde kullanılan state'lerin güncellenmesidir. State Localde oluşturulduğunda değişimi sadece kullanıldığı Component'in render edilmesini sağlar. Globalde oluşturulduğunda ise oluşturulan state ile bağlantılı tüm Componentler render edilir buda istenmeyen bir durumdur. O yüzden Contex gerçekten ihtiyaçsa kullanılmalı.

//! Context'in kullanımı ve aşamaları?
1 - Oluşturma-- > Creating
// bestPract--> src altında Context klasörü oluştur. içerinde Context (Conpenenti) dosyaları oluştur.
// import { createContext } from "react";
// export const LoginContext = createContext();

2 - Sarmallama-- > Provider
    //? nereden itibaren veri akışı olsun istiyorsan orada önce import et.
    // import PrivateRouter from "./pages/PrivateRouter";
    //? sonra Kullanılacak Component'i sarmalla.
    < LoginContext.Provider value = {{ user, setUser }}>
        <App />
//? --> user ve setUser 'un Kullanılacağı Component'ler. Bu durumda app'in chil'ı olan tüm Conpenent'ler bu iki veriyi kullanabilir.
    </LoginContext.Provider >

    3 - Tüketme-- > Consuming
//? Kullanılacak Conpenent'de önce import et.
// import { LoginContext } from "../context/LoginContext";
//? Sonra Çağır. (useContext'e arguman olarak nereden çekmek istediğini yazmayı unutma.)
// const { user, setUser } = useContext(LoginContext);

//!  Provider Aşamasında paylaşılacak veriler (yani value içerisine yazılacak veriler )nerede tanımlanmalı?
//? Provider nerede yapılıyorsa orada tanımlanmalı. 

//!  Yukarıda anlatılan Creating, Provider ve Consuming işlemlerini tek bir Component'de toplayabiliriz.

// bestPract--> Context klasörü altında örenğin LoginRrovider.jsx (Comp.in isminden Rrovider context Comp. olduğu anlaşılıyor.) isimli bir Component oluşturuyoruz.

1 - Oluşturma-- > Creating
//? 1. Oluşturduğumuz LoginRrovider.jsx 'de Creating işlemi
// import { createContext } from "react";
// export const LoginContext = createContext();

2. Provider(Sarmallama)
//? Sarmallama için yeni bir Component oluştur.
//? Bu Component içersinde değişkenleri tanımla.
//? return kısmında Provider işlemini yap. Value fazlaysa dışarıda değişkene ata value içersine değişkeni yerleştir. 
//? sarmallama işlemini props mantığı ile aldığımız children'lara yapacağız. 

const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({ email: "", password: "" });
    const values = { user, setUser };
    return (
        <LoginContext.Provider value={values}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;

3 - Tüketme-- > Consuming
// ?bir react hook'unu çağıran başka bir hook'a Custom hook denir.
//? Oluşturacağımız bu hook ile state'leri kullanacağımız Componentlerde state çağırma işlemini yapacağız.
//? Bu hook ile state'leri kullanacağımız Componentlerde "useContext, LoginContext " hook ve context'ini importa gerek kalmadı. sadece useLoginContext'i import ederek aşağıdaki gibi state çağırılabilir.

//! hook tanımlama
export const useLoginContext = () => {
    return useContext(LoginContext);
    // useContext ile oluşturduğumuz LoginContext'i oku ve gönder.
};
//! hook Çağırma
import { useLoginContext } from "../contex/LoginProvider";
const { user, setUser } = useLoginContext();


//! useReducer nedir?
//? State'leri tek elden kontrol etmeyi sağlayan bir hook.
//? iki parametre alır. 1. reducer fonksiyonu, 2. state'lerin başlangıç değeri.

//! reducer fonksiyonu nedir?
//? Javascript fonksiyonudur. Parametre olarak içersine state'leri ve bu stateleri değiştirecek actionları alır. Switch-case yapısı içersinde çalışır. Bu sistem kurulduktan sonra Conponent bizden dispatch() type'ını bekler.

////*****CONTEXT ÖZETİ ABDULLAH HOCA SON******/////






//todo 1-CREATE

import { createContext } from "react";

//! 1-CREATE
//? parantez içine initial/dfault valu vermek zorunlu değil, boş bırakılabilir.
//? bir contex oluşturduk ve export ile dışarı kullanıma açtık.
export const LoginContext = createContext();



//todo 2-PROVİDNG
import Footer from "./components/Footer";
import Navs from "./components/Navs";
import About from "./pages/About";
import Home from "./pages/Home";
import People from "./pages/People";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Login from "./pages/Login";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";
import PrivateRouter from "./pages/PrivateRouter";
//? import etmeyi unutma!!!

function App() {
    const [user, setUser] = useState("");
    return (
        //! 2-PROVİDNG
        //? kullanacağımız alanda ilgili yeri contex provider ile sarmalamak gerekiyor.
        //? bütün uygulamayı sarmaya aslında gerek yok, nerde lazımsa orayı sarmak yeterli.
        //? bu örnek için login verisini global state aktarmak gerekli;
        //! user bilgisini artık herkes kullanabilir.

        <LoginContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Navs />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="login" element={<Login />} />

                    <Route path="people" element={<PrivateRouter />}>
                        <Route path="" element={<People />} />
                        <Route path=":id" element={<PersonDetail />} />
                    </Route>

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </LoginContext.Provider>
    );
}

export default App;


//todo 3-CONSUMING
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    //! buradaki user verisi local state, bunu globala almak istiyoruz.
    //! o zaman contex kullanılan yerde tanımlama yapmak gerekiyor, ve ilave prop yollamadan buradan direk kullanılabilir.
    // const [user, setUser] = useState({ email: "", password: "" });

    //! 3-CONSUMING
    //? artık local state gerek yok, useContex hook ile Logincontexten consume edilebilir.
    const { user, setUser } = useContext(LoginContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    console.log(user);

    return (
        <Container>
            <h1 className="text-center mt-4">LOGIN PAGE</h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={user?.email || ""}
                        //! konsolda undefined value hatasını engellemek için yaptı.
                        //! unefined gelirse null olsun demek, genellikle nested obje yapısında kullanılan inputlarda karşılaşılır.
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={user?.password || ""}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </Form.Group>
                <Container className="text-center">
                    <Button variant="danger" type="submit">
                        Submit
                    </Button>
                </Container>
            </Form>
        </Container>
    );
};

export default Login;
