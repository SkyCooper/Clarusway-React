import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
  // const user = true;
  //! artık user bilgisini contexten consume etmek yeterli,
  const { user } = useContext(LoginContext);
  // return user ? <Outlet /> : <Navigate to="/login" />;
  //! artık user obje olduğundan email varsa yani giriş yapıldıysa olarak düzenliyoruz.
  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
