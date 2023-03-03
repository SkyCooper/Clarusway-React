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
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components).

//? Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.
