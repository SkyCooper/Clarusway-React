import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const PersonDetail = () => {
  const [person, setPerson] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  // const { state: person } = useLocation();

  // useEffect(() => {
  //   fetch(`https://reqres.in/api/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPerson(data.data))
  //     .catch((err) => console.log(err));
  // }, []);

  const getPerson = async () => {
    const {data} = await axios(`https://reqres.in/api/users/${id}`);
    setPerson(data.data);
  };

  useEffect(() => {
    getPerson();
  });

  const { first_name, last_name, avatar, email } = person;
  return (
    <div className="container text-center p-4 border border-dark">
      <h3>
        {first_name} {last_name}
      </h3>
      <p>Id No : {id}</p>
      <img className="rounded-circle" src={avatar} alt="" />
      <p>{email}</p>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Home
        </button>
        {/* <button onClick={()=> navigate(-1)} className="btn btn-success me-2">Home</button> */}
        <button onClick={() => navigate("/people")} className="btn btn-warning me-2">
          Back
        </button>
        <button onClick={() => navigate("/contact")} className="btn btn-danger">
          Contact
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
