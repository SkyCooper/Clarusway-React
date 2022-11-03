// const [loading, setLoading] = useState(false);
// const [catImage, setCatImage] = useState("");
// const [error, setError] = useState("");
//? böyle tanımlanmıştı başlangıç değerleri, useStateExample dosyasında


//! aynı başlangıç değerlerini obje formatında yazıyoruz.
export const initialState = {
  loading : false,
  catImage : "",
  error : "",
};



//!reducer fonksiyonu 2 tane parametre alıyor, 
//! state ve bunları değiştiren action
//! buradaki state yukarıda tanımlanan initialState
//? switch-case yapısı yazmak best practise, daha kolay, daha okunaklı
//? action olduğunda yani çalışmaya başaldğında hangi durumlar olablilir bunları case ile ben seçiyorum
//? isimlerini büyük hafle ben veriyorum,
//todo, burada veri çekmeye başladığında, başarılı bittiğinde ve hata verdiğinde diye 3 senaryo oluşturuldu.
export const reducer = (state, action) => {
  switch (action.type) {
    //? action.type = yani action içindeki tür neyse ona göre işlem yap, START İSE.. SUCCESS İSE.. FAIL İSE.. 

    //wsitct case snippet iel yazdı ve sonradan düzenledi, en sondaki default/break silmedi..
    case "START":
      return { ...state, loading: true };
    //? state i önce spread ile aç, sonra değişen durumları değiştir. değişmeyenleri yazmaya gerek yok
    // return { ...state, loading: true, catImage : "", error :"" };

    case "SUCCESS":
      return { ...state, catImage: action.payload, error: "", loading: false };
    //? kedi resmi değişeceğinden bu durum, action.payload ile yapılıyor.
    //? loading useStateExample da finally de false olduğundan aslında burada false olması lazım yoksa  START tan sonra true olarak kalır. 
    
    case "FAIL":
      return { ...state, catImage: "", error: action.payload, loading: false };
      //? error değişeceğinden bu durum, action.payload ile yapılıyor. image siliniyor, loading false oluyor.
    default:
      break;
  }
};
