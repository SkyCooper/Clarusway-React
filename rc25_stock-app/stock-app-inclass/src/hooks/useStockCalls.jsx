// import { axioswithToken } from "../service/axiosinstance";
import { useDispatch } from "react-redux";
import { fetchStart, getSuccess, fetchFail } from "../features/stockSlice";
import useAxios from "./useAxios";


const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //! parametrik yapıyoruz,
  const getStockData = async (url) => {
    // const url = "firms";
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/firms/${url}/`);
      // console.log(data);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");

  return { getFirms, getSales };
};

export default useStockCalls;
