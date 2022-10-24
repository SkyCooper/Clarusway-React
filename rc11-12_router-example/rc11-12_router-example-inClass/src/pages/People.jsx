import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// UseNavigate custom-hook'tur, yani içinde başka hook'lar vardır.
// dinamik route oluşturmayı sağlıyor ve bir fonksiyon üretiyor.
// bu fonksiyon best-practise olarak navigate değişkenine atanıyor.

const People = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  const getPeople = () => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      <div className="row justify-content-center g-3">
        {people?.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div
              key={id}
              className=" col-sm-12 col-md-6 col-lg-4"
              type="button"
              //?1nci yöntem
              // onClick={() => navigate(`/people/${id}`, { state: person })}
              //? açılan sayfada önceden fetch yapılan veri içinden id ye göre filitreleme yapma
              //? state keyi ile fetch edilen veri obje olarak gönderilir, başka isim kabul etmiyor, state olmak zorunda

              //! 2nci yöntem
              onClick={() => navigate(`/people/${id}`)}
              //* ablolute path, url'nin hepsi yazılıyor.

              // onClick={() => navigate(`${id}`)}
              //* relative path, yani var olan adres sonuna ekleme yapıyor.

              //! yani açılan sayfada id'ye göre yeniden fetch yapma
              //! state ile var olan person objesini yollamaya gerek yok.
            >
              <img className="rounded-circle" src={avatar} alt="img" />
              <h6>
                {first_name} {last_name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
