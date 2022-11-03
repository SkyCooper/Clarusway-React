////*****CONTEXT ÖZETİ******/////

//! Props Drilling nedir?
//? state ve verilerin parent'dan child'e akışını ifade eder.

//! Context nedir?
//? React uygulamasında, veriler propslar aracılığıyla yukarıdan aşağıya (parent--> çhild) iletilir, ancak bu tür bir kullanım, bir uygulama içindeki birçok Conpenent tarafından gerekli olan belirli türde propslar (örn. yerel ayar tercihi, UI teması) için zahmetli olabilir. Context, Props Drilling yapmadan Conpenentler arasında değerleri paylaşmanın bir yolunu sağlar.

//! State ve verileri local veya Global'de oluşturma arasındaki fark?
//? Conponent'in render edilme nedenlerinden biri içersinde kullanılan state'lerin güncellenmesidir. State Localde oluşturulduğunda değişimi sadece kullanıldığı Component'in render edilmesini sağlar. Globalde oluşturulduğunda ise oluşturulan state ile bağlantılı tüm Componentler render edilir buda istenmeyen bir durumdur. O yüzden Contex gerçekten ihtiyaçsa kullanılmalı.

//! Context'in kullanımı ve aşamaları?
1- Oluşturma--> Creating
// bestPract--> src altında Context klasörü oluştur. içerinde Context (Conpenenti) dosyaları oluştur.
// import { createContext } from "react";
// export const LoginContext = createContext();

2- Sarmallama--> Provider
//? nereden itibaren veri akışı olsun istiyorsan orada önce import et.
// import PrivateRouter from "./pages/PrivateRouter";
//? sonra Kullanılacak Component'i sarmalla.
    <LoginContext.Provider value={{ user, setUser }}>
    <App/> 
//? --> user ve setUser 'un Kullanılacağı Component'ler. Bu durumda app'in chil'ı olan tüm Conpenent'ler bu iki veriyi kullanabilir.
    </LoginContext.Provider>        

3- Tüketme--> Consuming 
//? Kullanılacak Conpenent'de önce import et.
// import { LoginContext } from "../context/LoginContext";
//? Sonra Çağır. (useContext'e arguman olarak nereden çekmek istediğini yazmayı unutma.)
// const { user, setUser } = useContext(LoginContext);

//!  Provider Aşamasında paylaşılacak veriler (yani value içerisine yazılacak veriler )nerede tanımlanmalı?
//? Provider nerede yapılıyorsa orada tanımlanmalı. 

//!  Yukarıda anlatılan Creating, Provider ve Consuming işlemlerini tek bir Component'de toplayabiliriz.

// bestPract--> Context klasörü altında örenğin LoginRrovider.jsx (Comp.in isminden Rrovider context Comp. olduğu anlaşılıyor.) isimli bir Component oluşturuyoruz.

1- Oluşturma--> Creating
//? 1. Oluşturduğumuz LoginRrovider.jsx 'de Creating işlemi
// import { createContext } from "react";
// export const LoginContext = createContext();

2. Provider (Sarmallama) 
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

3- Tüketme--> Consuming 
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