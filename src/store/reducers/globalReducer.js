import {
    SET_CATEGORY,
    CHANGE_LANGUAGE,
    SET_ROLES,
    CHANGE_THEME,
} from "../actions/globalActions";

const initialState = {
    roles: [],
    categories: [],
    theme: "dark",
    language: "tr"
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case SET_ROLES:
            return {
                ...state,
                roles: [...state.roles, action.payload]
            }
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: state.language === "tr" ? "en" : "tr"
            }
        case CHANGE_THEME:
            return {
                ...state,
                theme: state.theme === "dark" ? "light" : "dark"
            }

        default:
            return state;
    }
}

export default globalReducer;
