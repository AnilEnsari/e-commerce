import { api } from "../../api/api"
export const SET_ROLES = "SET_ROLES";
export const SET_CATEGORY = "SET_CATEGORY";
export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILURE = "FETCH_ROLES_FAILURE";


export const fetchRoles = () => async(dispatch) =>{
    try{
        const response = await api.get("/roles")
        dispatch({type:"FETCH_ROLES_SUCCESS",payload:response.data})
    }catch(error){
        dispatch({type:"FETCH_ROLES_FAILURE"})
    }
}

export const setRoles = (roles) => {
    return { type: SET_ROLES, payload: roles }
}

export const setCategory = (categories) => {
    return { type: SET_CATEGORY, payload: categories }
}

export const changeTheme = (theme) => {
    return { type: CHANGE_THEME, payload: theme }
}

export const changeLanguage = (language) => {
    return { type: CHANGE_LANGUAGE, payload: language }
}