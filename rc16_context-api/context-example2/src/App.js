import Footer from "./components/Footer";
import Navs from "./components/Navs";
import About from "./pages/About";
import Home from "./pages/Home";
import People from "./pages/People";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Login from "./pages/Login";
// import { LoginContext } from "./context/LoginContext";
// import { useState } from "react";
import PrivateRouter from "./pages/PrivateRouter";
import LoginProvider from "./context/LoginProvider";
//? import etmeyi unutma!!!

function App() {
  // const [user, setUser] = useState("");
  // artık buna gerek yok, loginProviderden alacak
  return (
    //! artık ilave state tanımlamaya veya value ile onu provide etmeye gerek yok,
    //! hepsi LoginProvider içinden yapıldı. 

    // <LoginContext.Provider value={{ user, setUser }}>
    <LoginProvider>
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />

          <Route path="people" element={<PrivateRouter />}>
            <Route path="" element={<People />} />
            <Route path=":id" element={<PersonDetail />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LoginProvider>
    // </LoginContext.Provider>
  );
}

export default App;
