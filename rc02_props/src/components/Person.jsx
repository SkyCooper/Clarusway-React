import Msg from "./Msg";

const Person = (props) => {
  const { name, img, tel } = props;
  return (
    // <div>
    //   <p>Merhaba Cooper</p>
    //   <img
    //     src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
    //     alt="img1"
    //   />
    //   <p>5324440444</p>
    // </div>

    <div style={{ textAlign: "center" }}>
      <p>Merhaba {name}</p>
      {/* Burada isim yazdırılıyor fakat onu da bir component haline getirdik */}

      <Msg name={name} />
      <img style={{ width: "200px" }} src={img} alt="img1" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
