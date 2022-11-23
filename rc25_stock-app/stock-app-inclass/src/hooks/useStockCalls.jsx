// import { axioswithToken } from "../service/axiosinstance";
import { useDispatch } from "react-redux";
import { fetchStart, getSuccess, fetchFail } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //! parametrik yapıyoruz,
  //!------------- GET CALLS ----------------

  const getStockData = async (url) => {
    // const url = "firms";
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      console.log(data);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");

  //!------------- DELETE CALLS ----------------
  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} successfuly deleted`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be deleted`);
    }
  };

  const deleteFirm = (id) => deleteStockData("firms", id);

  //!------------- POST CALLS ----------------
  const postStockData = async (info, url) => {
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} successfuly added`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
    }
  };
  const postFirm = (info) => postStockData(info, "firms");

  return {
    getStockData,
    postStockData,
    getFirms,
    getSales,
    deleteFirm,
    postFirm,
  };
};

//? getStockData, postStockData, expoort edildiğinde aslında diğerlerine gerek yok
//? getFirms yerine getStockData("firms") veya
//? postFirm yerine postStockData(info, "firms") yazıp kullanabiliriz 
//? ama kodun okunabilirliği açısından getFirms, postFirm kullanmak daha anlaşılır olur.

export default useStockCalls;
