//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componentler'de yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//? componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

const UseEffectHook = () => {
  //? snipet iskleti ve bölümlerin özellikleri;
  useEffect(() => {
    //? ComponentDidMount + ComponentDidUpdate bölümü
    return () => {
      //? Clean-up function (ComponentWillUnmount) bölümü
    };
  }, []); //? Dependency Array bölümü

  const [count, setCount] = useState(0);

  //! ComponentDidMount
  //! fetch, asyn-await, localStorage, setTimeout, setInterval(), işlemleri bu alanda yazılır.
  // useEffect(() => {
  //   console.log("2-Mounting");
  //   setTimeout(() => {
  //     alert("Data fetch");
  //   }, 3000);
  // }, []);

  //? ComponentDidMount + ComponentDidUpdate
  // useEffect(() => {
  //   console.log("2-Mounting + Updating olarak çalışır.");
  //   setTimeout(() => {
  //     alert("Data fetch");
  //   }, 1000);
  // }, [count]);

  //?componentDidUnmount
  const fetchData = () => {
    console.log("Data Fetched");
  };

  useEffect(() => {
    //! ComponentDidMount
    const timerId = setInterval(fetchData, 1000);
    console.log("Mounting");

    return () => {
      //! componentWillUnmount
      clearInterval(timerId);
      console.log("Unmounting");
    };
  }, []);

  console.log("1-Rendering");

  return (
    <div className="container text-center">
      <h1 className="text-danger">USE EFFECT</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
