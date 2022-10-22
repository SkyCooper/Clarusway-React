import { useParams, useLocation, useNavigate } from "react-router-dom";

const PersonDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  //todo,    App.js den hangi ismle aktarıldıysa öyle yakalanır.
  //todo,   <Route path="/people/:id" element={<PersonDetail />} />
  console.log(id);

  const { state : person } = useLocation();
  // gönderirken state yazmak zorunlu ama burada isim değiştirebiliriz
  console.log(person);
  // {id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg'} böyle bir veri görünür tıklanan resimden, 
  // link dinamik olduğu için direk adres yazınca çalışmaz. /pepole/2 yazarsak olmaz
  return (
    <div className="container text-center">
      <h3>
        {person.first_name} {person.last_name} ( ID : {person.id} )
      </h3>
      <img src={person.avatar} alt="" />
      <p>{person.email}</p>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Go Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          {/* (-1) ile bir önceki sayfaya gelir, histordeki, (-2) ile 2 önceki sayfaya gider,
          (+1) ileri gider, ama +2 olmadığı için çalışmaz. */}
          
        {/* <button onClick={() => navigate("/people")} className="btn btn-warning"> */}
        {/* böylede direk önceki adres yazılabilir. */}
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
