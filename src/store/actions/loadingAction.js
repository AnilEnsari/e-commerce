export const SET_LOADING = "SET_LOADING";


export const setLoading = (boolean) => {
  return {
    type: SET_LOADING,
    payload: boolean,
  };
};