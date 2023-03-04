const Events = () => {
    let message = "EVENT BASED PROGRAM";

    const handleChange = (e) => {
        message = "REACT";
        console.log(message); // REACT , aslında değişti
    };

    return (
        <div className="container text-center mt-4">
            <h1>{message}</h1>
            <button onClick={handleChange} className="btn btn-danger">
                Change
            </button>
        </div>
    );
};

export default Events;

//! burada message'ın console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components). (2019'dan sonra çıktı)

//? Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.



//! çok fazla burayta bakmaya gerek yok, artık kullanılımıyor.
//* ================= CLASS COMPONENTS AND STATE ====================
// React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
// Cok fazla boilerplate kod icermektedir.
// Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
// State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
// Bir componentin state'i zaman icerisinde degisebilir.
// State her degistiginde React bu componenti yeninden render eder.
// Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
// constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================

//! bu konuda interview'larda bind / binding konusu sorulabilir, aslında artık kullanılmıyor.

import { Component } from "react";

class Counter extends Component {

  // rconst --> constructor snippeti    
  constructor(props) {
    super(props);

    //! count state'ine baslangic degeri atadik, key/value şeklinde
    this.state = {
    // sıfırdan başlasın
        count: 0,
    // prop ile gelen değerden(varsa) veya sıfırdan başlasın
        count: props.count || 0,
    };

    //? increment metodunun Counter class'ina baglanmasi (bind)
    this.increment = this.increment.bind(this);
  }

  // fonksiyonları constructor dışında ve başına let/const vs yazmadan tanımlıyoruz.
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  //! Yazmis oldugumuz metotlar default olarak classa baglanmaz.
  //! Ancak, React built-in fonksiyonlari baglidir.

  //* Bunun icin metotlarimizi ya constructor icerisinde baglamaliyiz(bind) yada otomatik baglamayi saglayan arrow fonksiyonlarini kullanmaliyiz.
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="container text-center mt-4">
        <h1>CLASSFUL COMPONENTS</h1>
        {/* this.state.count ile erişiliyor. */}
        <h2 className="display-4 text-danger">COUNT:{this.state.count}</h2>
        <button onClick={this.increment} className="btn btn-success">
          INC
        </button>

        <button onClick={this.decrement} className="btn btn-danger">
          DEC
        </button>
      </div>
    );
  }
}

export default Counter;





//todo, aynısının hook ile yapılması

//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza olanak saglayan ozel fonksiyonlardir.
// React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in Hook bulunmaktadir.
//? Ayrica custom hook tanimlamak da mumkundur. bütün isimler use ile başlar.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* =============================================================

import { useState } from "react";

const UseStateCounter = () => {
  //* useState en cok kullanilan Hook'tur.
  //* Bir state'in degisken, dizi ve obje ile kullanilabilmesine olanak saglar.
  //? useState hook'u bir dizi dondurur.Bu dizi array dest ile acilabilir.
  //? Acilan dizinin 1.elemani state degiskenidir.                         --> count
  //? 2.si ise state'i degistirmeye izin veren bir setter metodudur.       --> setCount
  //? useState parametre olarak state'in ilk degerini alir.

  const [count, setCount] = useState(0); //? arr destr.

  const [person, setPerson] = useState({
    name: "John",
    surname: "Doe",
    age: 43,
  });

  const inc = () => {
    setCount(count + 1);
  };

  //! veya aşağıda onClick içinde short-circut yapılır.
  // const dec = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  const incAge = () => {
    // setPerson(person.age + 1);
    //? Bu sekilde bir atama ile sayisal deger state'in uzerine yazilmis oldu.
    //? Dolayisiyla obje yapisi bozuldu.
    // setPerson({ name: "Ahmet", surname: "Can", age: 44 });
    //? böyle çalışırdı, çünkü obje yapısı korundu

    setPerson({ ...person, age: person.age + 1 });
    //? person spread ile aç, ve age değerini değiştir.
  };

  console.log(person);

  return (
    <div className="container text-center mt-4">
      <section>
        <h1>USESTATE HOOK</h1>
        <h2 className="display-4 text-danger">COUNT:{count}</h2>
        <button onClick={inc} className="btn btn-success">
          INC
        </button>

        <button onClick={() => setCount(0)} className="btn btn-dark">
          CLR
        </button>
        {/* <button onClick={dec} className="btn btn-danger">
        DEC
      </button> */}
        <button
          onClick={() => count > 0 && setCount(count - 1)}
          className="btn btn-danger"
        >
          DEC
        </button>
      </section>
      <section>
        <h1>USESTATE OBJECT</h1>
        <h2>{person.name}</h2>
        <h2>{person.surname}</h2>
        <h4>{person.age}</h4>
        <button onClick={incAge} className="btn btn-info">
          inc age
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;