// rc02 basicStyling dersi

//! JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
// Stillendirme icin property-value(object) yapisi kullanilir.
// property isimlerinde camelCase kullanimalidir.
// class isimleri icin className kullanilir.
// Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

//* 1- Harici stillendirme dosyasi
// hiç birşey import etmeden zaten default var olan index.css içerisinden stillendirme verilebilir, çünkü index.css index.js'ye bağlı ve index.js en baba component
// veya ilave bir harici css dosyası oluşturup hangi component de kullanacaksak orada import edebiliriz.
import "./Content.css";

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
import img2 from "../img/spring2.jpg";

const Content = () => {
    //? JS alanı

    //* 3-Local veya global degiskenler ile;
    // jsx alanı dışında component içinde js alanında tanımlanır.
    // key/value şeklinde tanımlanır.

    const imgStyle = {
        display: "block",
        width: "300px",
        margin: "1rem auto",
    };

    return (
        //? JSX alanı
        <div>
            {/* 2- inline style */}
            {/* style yazıp çift süslü {{}} kullanılır, birincisi js için,
            ikincisi key/value formatındaki objenin kendi süslüsü */}
            {/* property isimlerinde camelCase kullanimalidir - backgroundColor */}
            <h2 style={{ color: "red" }}>React JS</h2>
            <p style={{ backgroundColor: "lightcoral" }}>
                React, Kullanici arabirimi tasarlamak icin kullanilan bir JS
                kütüphanesidir.
            </p>
            <img
                style={imgStyle}
                src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg"
                alt="img1"
            />
            {/* Dahili bir resim eklemek icin import yapmak gereklidir.  src={img2}  */}
            <img style={imgStyle} src={img2} alt="img2" />

            {/* 1- Harici stillendirme dosyasi */}
            {/* import "./Content.css" , harici dosya ile class'a stil verilebilir.*/}
            {/* .par-1 {
                        font-family: 'Courier New', Courier, monospace;
                        font-size: 1.2rem;
                        text-align: center;
                        color: blue;
                        } - Content.css içeriği  */}
            {/* class isimleri icin className kullanilir - className="par-1" */}
            <p className="par-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                quaerat exercitationem repellendus, perspiciatis quo beatae
                magni distinctio quis ullam mollitia cupiditate ipsa consectetur
                asperiores? Illum dolore at, quidem nulla consequatur reiciendis
                cupiditate eius iusto fugit omnis dolorum quis odio ut?
            </p>
        </div>
    );
};

export default Content;
