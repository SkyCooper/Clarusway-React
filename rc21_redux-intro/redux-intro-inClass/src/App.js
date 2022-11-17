import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";
import { store } from "./redux";
//? import { store } from "./redux"; içinde ismi index olduğu için otomatik olarak aldı.
//? import { createStore } from "redux";
//? aslında yukarıdaki gibi yazılabilir, üzerini çiziyor ama çalışıyor, uyarı vermemesi için aşağıdaki gibi yazılıyor..
// import { legacy_createStore as createStore } from "redux";
// import reducer from "./redux";
//! contex Api da ki contex sayısı arttıkça (authContex, loginContext, basketContext vs..) uygulama performansı düşer, global stateler fazla ise redux kullanmak daha mantıklı.
//! redux --> global state yönetim kütüphanesidir.
//! third-part olduğundan kurulması ve dependisiese eklenmesi gerekli.
//! dinamik yapılar için çok uygundur, ve debug yöntemleri vardır..

function App() {
  // const store = createStore(reducer);
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
