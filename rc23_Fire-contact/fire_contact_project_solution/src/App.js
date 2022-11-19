import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import {useState} from "react"
import {AddUser,UpdateUser} from "./utils/functions"
import { ToastContainer } from "react-toastify";

const initialValues={
  username:"",
  phoneNumber:"",
  gender:""
}

//? 3 giriş alanı olduğu için initial value obje olarak tanımlandı, ve artık veri girişi yapıldıktan sonra formu temizlemek için initial değerlere set etmek yeterli olacak..

function App() {
  const [info, setInfo] = useState(initialValues)
  const [isAdd,setIsAdd]=useState("ADD")
  
  //? form componentinin onSubmitine verilecek fakat dah üst seviyede tanımlanıyor.
  const handleSubmit=(e)=>{
    e.preventDefault();
    //? kullanıcı varsa, id dolu ise update yap
    if(info.id){
      UpdateUser(info)
    }
    //? kullanıcı yoksa, add yap
    else{
      AddUser(info)
    }
    //? açılışta inputların içini boşaltmak için;
    setInfo(initialValues)
    //? button ADD olsun
    setIsAdd("ADD")
  }
  
  const editUser=(id,username,phoneNumber,gender)=>{
    //? button UPDATE olsun
    setIsAdd("UPDATE")
    setInfo({id,username,phoneNumber,gender})
  }

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit} isAdd={isAdd} />
      <Contacts editUser={editUser}/>
      <ToastContainer/>
    </div>
  );
}

export default App;
