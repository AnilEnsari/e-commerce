import {
    SET_PRODUCT_LIST,
  } from "../actions/productActions";
  import {FILTER_PRODUCT_LIST} from "../actions/productActions"
  
  const initialState = {
    productList: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PRODUCT_LIST:
        return { ...state, productList: action.payload };

      case FILTER_PRODUCT_LIST:
        return {...state , productList: state.productList.filter((product) => product?.description?.includes(action.payload))}  
      default:
        return state;
    }
  };
  
  export default productReducer;