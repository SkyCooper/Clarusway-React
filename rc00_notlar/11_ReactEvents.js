//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.

//? Ayrinti icin : https://reactjs.org/docs/events.html
//* https://reactjs.org/docs/events.html#gatsby-focus-wrapper

// addEventListener vs. tanımlamadan js ortamı camelCase olduğundan sadece event ismini yazıyoruz.



//? 1- event içinde kullanılacak fonksiyon parametresi yoksa direk çağır.
//? onClick={handleClick}
const Events = () => {
    const handleClick = () => {
        alert("Btn Clicked");
    };

    return (
        <div className="container text-center mt-4">
            <button onClick={handleClick} className="btn btn-success">
                Click
            </button>
        </div>
    );
};
export default Events;




//? 2- event içinde kullanılacak fonksiyon parametresi varsa callback gibi çağır.
//? onClick={() => handleClear("Clear Btn Clicked")}
// Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa bu fonksiyon bir arrow fonks. tarafindan cagrilmalidir. Aksi takdirde event fonksiyonu event gerceklesmeden cagirilir,
// onClick={handleClear("Clear Btn Clicked")} yani callback yapılmaz, böyle yazılırsa tıklamadan çalışır, 

const Events = () => {
    const handleClear = (msg) => {
        alert(msg);
    };

    return (
        <div className="container text-center mt-4">
            <button
                onClick={() => handleClear("Clear Btn Clicked")}
                className="btn btn-dark"
            >
                Clear
            </button>
        </div>
    );
};
export default Events;





//? event için bir parametre göndermeye gerek olmadan direk tanır. (e veya event veya herhangibir isim)
const handleChange = (e) => {
    console.log(e.target);  // <button class="btn btn-danger"> Change </button> , çıktısı
};
<button onClick={handleChange} className="btn btn-danger"> Change </button>

// <button onClick={(event)=>handleChange(event)} className="btn btn-danger"> Change </button>
// sanki (event) varmış gibi davranır, yazmaya gerek olmadan

//! kopyalamayı yasaklamak için;
<p onCopy={(e) => {
    e.preventDefault();
    alert("you cant copy document");}}>
{inputValue}
</p>
