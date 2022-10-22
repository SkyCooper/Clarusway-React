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
              // onClick={() => navigate(`/people/${id}`, { state: person })}
              // state keyi ile göndermek gerekli başlka isim kabul etmiyor.
              onClick={() => navigate(`/people/${id}`)}
              // 2nci yöntem yani açılan sayffada id'ye göre yeniden fetch yapma
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
