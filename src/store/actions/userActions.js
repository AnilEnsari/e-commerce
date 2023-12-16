import axios from "axios";
import { api } from "../../api/api";

export const SET_USER = "SET_USER";

export const setUser = (userobj) => {
    return { type: SET_USER, payload: userobj }
}


export const getUserByVerify = () => (dispatch) => {
    const token = localStorage.getItem("token");
    api.get("/verify", {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
    })
        .then((response) => {
            const user = response.data;
            dispatch(setUser(user));
            // user reducer

            const newToken = response.data.token;

            localStorage.setItem("token", newToken);

            axios.defaults.headers.common["Authorization"] = newToken;
        })
        .catch((error) => {
            localStorage.removeItem('token');
            delete axios.defaults.headers.common["Authorization"];
            console.log("Error token yetkilendirilemedi:", error.message);
        });
}