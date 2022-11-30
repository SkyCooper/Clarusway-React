import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "https://13673.fullstack.clarusway.com/";

//* Token'siz api istekleri icin bir instance olustur.
//? Axios Instance for Public API Request

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  //* Token gerektiren istekler icin bir baska instance olusutur.
  //? Axios Instance for Private API Request

  const axiosWithToken = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosWithToken };
};

export default useAxios;
