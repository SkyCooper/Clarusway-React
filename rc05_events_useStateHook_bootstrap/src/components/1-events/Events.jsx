// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {
  let message = "EVENT BASED PROGRAM";

  const handleAdd = () => {
    alert("Add buton clicked");
  };

  const handleClear = (msg) => {
    alert(msg);
  };

  const handleChange = (event) => {
    console.log(event.target);
    message = "Cooper";
    console.log(message) 
  };

  return (
    <div className="container text-center mt-4">
      <h1>{message}</h1>
      <button onClick={handleAdd} className="btn btn-success">
        Add
      </button>

      {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}

      <button
        onClick={() => handleClear("Clear btn Clicked")}
        className="btn btn-danger"
      >
        Clear
      </button>

      <button onClick={handleChange} className="btn btn-dark">
        Change
      </button>
      {/* <button onClick={(e) => handleChange(e)} className="btn btn-danger">
        Change
      </button> */}
    </div>
  );
};

export default Events;


//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.