import {
    SET_LOADING,
  } from "../actions/loadingAction";
  
  const initialState = {
    boolean:false
  }
  
  const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_LOADING:
        return { ...state, boolean: action.payload };
      default:
        return state;
    }
  };
  
  export default loadingReducer;