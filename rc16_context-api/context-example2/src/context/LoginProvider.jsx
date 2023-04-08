import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

// example-1 in aynısı fakat sytax olarak farklı, herşeyi tek dosya üzerinden yapıyoruz.
//? dosya adını provider olarak düzenliyoruz bestpractise olarak.
//? önce cerate ediyoruz..

//! 1-CREATE
//? parantez içine initial/dfault valu vermek zorunlu değil, boş bırakılabilir.
//? bir contex oluşturduk ve export ile dışarı kullanıma açtık.
export const LoginContext = createContext();

//? sonra sarmalamayı yapıyoruz.
//! 2-PROVIDING
//? app.js te sarmaladğı bütün childrenlar da artık user bilgisi global olarak contexten kullanılabilir.
const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const values = { user, setUser };
  //? valuler içine de yazılabilir veya çok fazla value varsa dışarıda tanımlanıp öyle de yazılabilir.
  //? example-1 de böyle yazılabilirdi.
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

//! 3-CONSUMING CUSTOM HOOK
//? bizim yazdığımız bir hook react-hook'unu çağırıyorsa buna custom-hook denir.

export const useLoginContext = () => {
  return useContext(LoginContext);
};

// burada bize sağladığı avantaj,useContext ve LoginContexti ayrıa ayrı import etmeye gerek yok,
// sadece useLoginContext import etsek yeterli. bu örnekte çok mantıklı değil ama 
//! örğneğin bir fetch işleminde aynı sytaxla sadece url değişerek veri çekiliyor, biz bir hook yazıp
//! url yi prop olarak yollayarak istediğimiz yerde kullanabiliriz.

export default LoginProvider;
