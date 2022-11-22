// import { axioswithToken } from "../service/axiosinstance";
import { useDispatch } from "react-redux";
import { fetchStart, getSuccess, fetchFail } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
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

  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}`);
      toastSuccessNotify(`${url} succesfully deleted`)
      getStockData(url)
    } catch (error) {
      console.log(error)
      toastErrorNotify(`${url} can not be deleted`);
    }
  };

  const deleteFirm = (id) => deleteStockData("firms", id)

  return { getFirms, getSales, deleteFirm };
};

export default useStockCalls;
