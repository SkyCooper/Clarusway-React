import { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";

const UseReducerExample = () => {
  // const [catImage, setCatImage] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  //! useReducer hook içine 2 parametre alıyor.
  //! reducer fonksiyonu --> biz tanımladık switch/case yapısı ile (component değil, pure js fonksiyonu)
  //! initialState --> biz tanımladık obje formatında, statelerin başlangıç değerleri 
  //todo, aslında bu ikisi aynı bu dosyada yukarıda yazılabilirdi, fakat best practise ayrı olarak harici dosyadan kullanmak mantıklı, clean code açısından.
  const {loading, catImage, error} = state
  // state aslında initialState olduğunda dest edip kullanabiliriz.

  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    // setLoading(true);
    dispatch({type: "START"})
    try {
      const res = await fetch(url);
      const data = await res.json();
      // setCatImage(data[0].url);
      // setError("");
    dispatch({ type: "SUCCESS", payload: data[0].url });

    } catch (error) {
      // setError("DATA CAN NOT BE FETCHED");
      // setCatImage("");
    dispatch({ type: "FAIL", payload: "DATA CAN NOT BE FETCHED" });

      // console.log(error);
    } 
    //! artık buna gerek kalmadı
    // finally {
    //   // setLoading(false);
    // }
  };
  // console.log(error);
  // console.log(catImage);

  return (
    <div>
      <button
        onClick={getCatImage}
        disabled={loading}
        style={{ display: "block", margin: "1rem" }}
      >
        Get Cat Image
      </button>
      {error && <h2>{error}</h2>}
      {catImage && <img width="50%" src={catImage} alt="img" />}
    </div>
  );
};

export default UseReducerExample;
