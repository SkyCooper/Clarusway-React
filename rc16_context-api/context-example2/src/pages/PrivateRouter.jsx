import { Outlet, Navigate } from "react-router-dom";
// import { LoginContext } from "../context/LoginContext";
// import { useContext } from "react";
import { useLoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  // const { user } = useContext(LoginContext);
  //! tek bir import yeterli
  const { user } = useLoginContext();
  // return user ? <Outlet /> : <Navigate to="/login" />;
  //! artık user obje olduğundan email varsa yani giriş yapıldıysa olarak düzenliyoruz.
  return user?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
