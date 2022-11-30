// import { axioswithToken } from "../service/axiosinstance";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getSuccess,
  getProCatBrandsSuccess,
  getAllStockSuccess,
} from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

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
  const getCategories = () => getStockData("categories");
  const getBrands = () => getStockData("brands");
  const getProducts = () => getStockData("products");
  const getPurchases = () => getStockData("purchases");

  //todo, promiseAll yazıyoruz,
  //todo, products, categories ve brands hepsi aynı anda API den çekiliyor
  //todo, hepsi en uzun süreli olanın zamanında bitiyor, (200, 150, 180)
  //todo, 530 ms iken, hepsi 200ms de bitiyor.

  const getProCatBrands = async () => {
    dispatch(fetchStart());
    try {
      const [products, categories, brands] = await Promise.all([
        axiosWithToken.get("stock/products/"),
        axiosWithToken.get("stock/categories/"),
        axiosWithToken.get("stock/brands/"),
      ]);
      dispatch(
        getProCatBrandsSuccess([products?.data, categories?.data, brands?.data])
      );
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const getAllStockData = async () => {
    dispatch(fetchStart());
    try {
      const [purchases, firms, brands, sales, products, categories] =
        await Promise.all([
          axiosWithToken.get("/stock/purchases"),
          axiosWithToken.get("/stock/firms"),
          axiosWithToken.get("/stock/brands"),
          axiosWithToken.get("/stock/sales"),
          axiosWithToken.get("/stock/products"),
          axiosWithToken.get("/stock/categories"),
        ]);
      dispatch(
        getAllStockSuccess([
          purchases.data,
          firms.data,
          brands.data,
          sales.data,
          products.data,
          categories.data,
        ])
      );
    } catch (err) {
      dispatch(fetchFail());
    }
  };

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
  const deleteBrand = (id) => deleteStockData("brands", id);
  const deleteProduct = (id) => deleteStockData("products", id);
  const deleteSale = (id) => deleteStockData("sales", id);
  const deletePurchase = (id) => deleteStockData("purchases", id);

  //!------------- POST CALLS ----------------
  const postStockData = async (info, url) => {
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} successfuly added`);
      getStockData(url);
      //? bu aslında getFirms
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
    }
  };

  const postFirm = (info) => postStockData(info, "firms");
  const postBrand = (info) => postStockData(info, "brands");
  const postProduct = (info) => postStockData(info, "products");
  const postSale = (info) => postStockData(info, "sales");
  const postPurchase = (info) => postStockData(info, "purchases");

  //!------------- PUT CALLS ----------------

  const putStockData = async (info, url) => {
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successfuly updated`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
    }
  };

  const putFirm = (info) => putStockData(info, "firms");
  const putBrand = (info) => putStockData(info, "brands");
  const putSale = (info) => putStockData(info, "sales");
  const putPurchase = (info) => putStockData(info, "purchases");


  return {
    getStockData,
    getFirms,
    getSales,
    getCategories,
    getProducts,
    getProCatBrands,
    getBrands,
    getPurchases,
    getAllStockData,
    deleteFirm,
    deleteBrand,
    deleteProduct,
    deleteSale,
    deletePurchase,
    postFirm,
    postStockData,
    postBrand,
    postProduct,
    postSale,
    postPurchase,
    putFirm,
    putStockData,
    putBrand,
    putSale,
    putPurchase,
  };
};

//? getStockData, postStockData, expoort edildiğinde aslında diğerlerine gerek yok
//? getFirms yerine getStockData("firms") veya
//? postFirm yerine postStockData(info, "firms") yazıp kullanabiliriz
//? ama kodun okunabilirliği açısından getFirms, postFirm kullanmak daha anlaşılır olur.

export default useStockCalls;
