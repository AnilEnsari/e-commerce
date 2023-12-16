import { api } from "../../api/api";
import { setLoading } from "./loadingAction";

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const FILTER_PRODUCT_LIST = "FILTER_PRODUCT_LIST"

export const setProductList = (product) => {
  return {
    type: SET_PRODUCT_LIST,
    payload: product,
  };
};
export const filterProductList = (filter) => {
  return {
    type: FILTER_PRODUCT_LIST,
    payload: filter,
  };
};


export const getProductsByThunk = () => (dispatch) => {
  api.get(`products/`)
  .then((response) => {
    console.log("REPONSE DATA , ", response)
    dispatch(setProductList(response?.data?.products))
    dispatch(setLoading(false));
  })
}