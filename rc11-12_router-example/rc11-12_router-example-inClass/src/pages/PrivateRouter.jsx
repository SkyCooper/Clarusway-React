import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  // const user = true;
  //* yani kullanıcı giriş yaptıysa outleti yani App.js içindeki child componenti yani contactı göster.

  const user = false;
  //* yani kullanıcı giriş yapmadıysa Login sayfasını ve giriş yapmaya yönlendir.
  
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
