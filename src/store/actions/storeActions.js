export const SET_STORE = "SET_STORE";

export const SetStore = (store) =>{
    return {
        type:SET_STORE,
        payload:store
    }
}