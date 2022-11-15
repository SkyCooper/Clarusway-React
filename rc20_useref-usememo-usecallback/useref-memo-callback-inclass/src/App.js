import { useRef } from "react";
import { useEffect, useMemo, useState, useCallback } from "react";
import Card from "./components/Card";
import ClearButton from "./components/ClearButton";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";
import UseRefComp from "./components/UseRefComp";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  //const taxData = {"tax":0.18,"ship":15}
  //! taxData obje olduğu için içindekiler değişmese bile App.js her render olduğunda adresi değiştiğinden TaxComponenti de render oluyor.
  const taxData = useRef({ tax: 0.18, ship: 15 }); //hafizada değişmeyen mutable değişken tanımlamamızda yarıyor

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

//todo, useMemo fonksiyonun döndürdüğü değeri kayıt ediyor,
//todo, useCallback fonksiyonun kendisini kayıt ediyor.

  //const filteredData = data?.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
  //! array adresi her defasında değiştiği için component render oluyor. bunun için useMemo kullanıyoruz.

  const filteredData = useMemo(() => {
    console.log("useMemo çalıştı");
    return data?.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);
  //* data ve search değişirse bu filitrelemeyi yap, o zaman render et demek..


  const handleSearch = () => {
    setSearch(text);
  };


  //* clear butonuna basıldığında initial değerlere dönecek bir fonksiyon
  // const handleClear = ()=>{
    //   setText("")
    //   setSearch("")
    // }
    
    //* fonksiyonlarda nesne tipinde olduğundan her renderde memorydeki yeri değişiyor ve ona bağlı olan component render oluyor, bunun için burada useCallback kullanıyoruz.
  const handleClear = useCallback(() => {
    setText("");
    setSearch("");
  }, []);

  return (
    <div className="container mt-2">
      <div>
        <Header count={count < 5 ? 0 : count} />
        <hr />
        <HeaderMemo count={count < 5 ? 0 : count} />
        {/* react memo ile render önüne geçildi */}
      </div>
      <hr />
      <TaxComp taxData={taxData} />
      <div>
        <p>{count}</p>
        <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="row">
        <Card data={filteredData} />
      </div>
      <hr />
      <ClearButton handleClear={handleClear} />
      <br />
      <br />
      <hr />
      <h1>useRef</h1>
      <UseRefComp />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;


//* react {memo}
//* stateler her değiştiğinde component render olacağı için alt componentler de yeniden oluşturulur. bunu önlemenin yolu react memo kullanmak. memo bize sadece ilgili componente gönderilen değer değiştiğinde sardığı componenti tekrar render ettirir. faydasız kaldığı yer object tipli verilerdir. onu engellemenin yolu da useMemo kullanmak

//? useMemo
//? Shallow comparison’da eğer karşılaştırılan tipler nesne (Object) ise içerisindeki değerleri değil referans değerleri karşılaştırılır. Eğer karşılaştırılan nesneler memory’de aynı adresi gösteriyorsa true göstermiyorsa false olarak değer döndürür.

//? Input alanına bir değer girdiğimiz zaman App.js tekrar render edildiği için filteredData tekrar oluşur. filteredData tekrardan oluştuğu için Card componentine göndermiş olduğumuz data her seferinde farklı bir adrese sahip olur. Bu yüzdende React.memo Card componentine ilk seferde göndermiş olduğumuz data array’inin tutulduğu adres ile render edildikten sonra gelen data array’inin farklı adreste bulunduğunu gördüğü için CArd componentini tekrar render eder. Props olarak verdiğimiz array değişmediği halde Card componentinin render edilmesini engelleyebilmek için useMemo kullanabiliriz.
