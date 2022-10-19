import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";

const TutorialList = ({ tutor, getTutorials }) => {
  //! DELETE (CRUD-Delete)
  const deleteTutorial = async (id) => {
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
    try {
      await axios.delete(`${url}/${id}`);
      // id vermez isek var olan bütün verileri siler,
      // url ve id yi beraber yazabilmek için backtick içinde yazıyoruz.
      // axios yazarsak Get yapar default olarak, onun için başına delete yazıyoruz.
    } catch (error) {
      console.log(error);
    }
    getTutorials();
    // sildikten sonra sayfanın refresh etmeden render olması için, home componenti içinden getTutorials() fonksiyonunu prop olarak yollayıp burada karşılıyor ve sonra çağırıyoruz.
    //! <TutorialList tutor={tutorials} getTutorials={getTutorials} />
  };

  //! PUT (CRUD-Update)
  //! PUT: Whole Update, PATCH: Partially Update
  const editTutorial = async ({ id, title, description }) => {
    // const { id, title, description } = item;
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
    try {
      await axios.put(`${url}/${id}`, { title, description });
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutor?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    className="me-2 text-warning"
                    onClick={() =>
                      editTutorial({
                        id: "1581",
                        title: "UPDATE",
                        description: "UPDATE",
                      })
                    }
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                    //  id zaten yukarıdan dest edilmişti, parametre olarak verince arrow func çevirmek gerekli
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <EditTutorial />
    </div>
  );
};

export default TutorialList;
