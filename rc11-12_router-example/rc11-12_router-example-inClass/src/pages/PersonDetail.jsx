import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import spinner from "../img/loading.gif";
//? people dan dinamik oluşturulan link için verilen id parametresini kullanabilmek için useParam hook import ediliyor.

//? obje olarak gönderilen person verisini karşılamak için useLocation hook import edilir.

//* GoHome/GoBack butonlarının aktif olması için useNavigate hook import edilir.

const PersonDetail = () => {
  //? 1nci yöntem, önceden fetch yapılan objeden faydalanma
  // const navigate = useNavigate();
  // const { id } = useParams();
  //todo,    App.js den hangi ismile aktarıldıysa öyle yakalanır.
  //todo,   <Route path="/people/:id" element={<PersonDetail />} />
  // console.log(id);
  //? const { state } = useLocation();
  //? state olarak destruct edip kullanabiliriz.
  // const { state: person } = useLocation();
  //? gönderirken state yazmak zorunlu ama burada isim değiştirebiliriz, ve artık person olarak kullanabiliriz.
  // console.log(person);
  //? 1numaralı resme tıklayınca konsolda çıkan veriler... {id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg'},

  //? link dinamik olduğu için direk adres yazınca çalışmaz. /pepole/2 yazarsak olmaz. çünkü önce tıklama olacak, tıklama ile birlikte id ve person objesi aktarılacak ve oradan bilgiler alınacak. direk yazınca Onclick olmayıp, bunlar  yapılmadığı için link çalışmaz.

  //! 2nci yöntem, yeniden id ye göre fetch yapma;

  //! önceden yapılan fetch kodlarını alıp people yerine person yazarak kodu güncelledi,

  //! useState import et, ve sadece 1 aobje çekeceğimiz için state [] dizi olmasına gerek yok, "" null yapabiliriz.

  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  //! api adresini backtick içinde id değişkeni ile yeniden düzenle
  const getPerson = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          setLoading(false);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  };

  //! useEffect hook import et
  useEffect(() => {
    getPerson();
  }, []);

  //! her defasında yeniden fetch yapıldığı için daha yavaş çalışır, fakat artık linke direk adres (/pepole/2) yazınca hata vermez ve link açılır.

  //todo getPerson direk useEffet içinde çağırılarakda yazılabilir aslında
  // useEffect(() => {
  //   fetch(`https://reqres.in/api/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPerson(data.data))
  //     .catch((err) => console.log(err));
  // }, []);

  if (error) {
    return <NotFound />;
  }

  if (loading) {
    return (
      <div className="text-center">
        <h3>Data Loading...</h3>
        <img src="../img/loading.gif" alt="" />
      </div>
    );
  }
  if (!error && !loading) {
    return (
      <div className="container text-center">
        <h3>
          {person?.first_name} {person?.last_name} ( ID : {person?.id} )
        </h3>
        <img src={person?.avatar} alt="" />
        <p>{person?.email}</p>
        <div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-success me-2"
          >
            Go Home
          </button>
          <button onClick={() => navigate(-1)} className="btn btn-warning">
            {/* (-1) ile bir histordeki önceki sayfaya gelir, (-2) ile 2 önceki sayfaya gider, (1) ileri gider, ama (2) olmadığı için çalışmaz. */}
            {/* konsoldan history.back(-1) veya history.forward() yazınca iler/geri gider. navigate aslında arka planda bunu kullanır.*/}
            {/* <button onClick={() => navigate("/people")} className="btn btn-warning"> */}
            {/* böylede direk önceki adres yazılabilir. */}
            Go Back
          </button>
        </div>
      </div>
    );
  }
};

export default PersonDetail;
